create extension if not exists "pgcrypto";

create type account_role as enum ('user', 'organization', 'admin');
create type opportunity_type as enum (
  'internship',
  'volunteer',
  'job',
  'competition',
  'hackathon',
  'research',
  'mentorship',
  'leadership_program',
  'scholarship',
  'community_event',
  'student_ambassador',
  'summer_program',
  'networking_event',
  'fellowship'
);
create type work_mode as enum ('remote', 'in_person', 'hybrid');
create type application_status as enum (
  'submitted',
  'under_review',
  'interview',
  'accepted',
  'rejected',
  'waitlisted',
  'withdrawn'
);
create type moderation_status as enum ('draft', 'pending_approval', 'approved', 'rejected', 'archived');

create table profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  role account_role not null default 'user',
  full_name text not null,
  bio text,
  school text,
  graduation_year int,
  gpa numeric(3,2),
  resume_url text,
  portfolio_url text,
  linkedin_url text,
  github_url text,
  profile_photo_url text,
  banner_image_url text,
  volunteer_hours int default 0,
  reputation_xp int default 0,
  profile_strength int default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table organizations (
  id uuid primary key default gen_random_uuid(),
  owner_profile_id uuid not null references profiles(id) on delete cascade,
  name text not null,
  slug text not null unique,
  mission_statement text,
  website_url text,
  logo_url text,
  banner_url text,
  social_links jsonb not null default '[]'::jsonb,
  organization_type text,
  company_size text,
  industry text,
  location text,
  verified_at timestamptz,
  moderation_state moderation_status not null default 'pending_approval',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table opportunities (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  slug text not null unique,
  title text not null,
  opportunity_kind opportunity_type not null,
  work_mode work_mode not null,
  location text,
  compensation text,
  summary text not null,
  description text not null,
  responsibilities jsonb not null default '[]'::jsonb,
  qualifications jsonb not null default '[]'::jsonb,
  skill_tags jsonb not null default '[]'::jsonb,
  media jsonb not null default '[]'::jsonb,
  eligibility jsonb not null default '[]'::jsonb,
  custom_questions jsonb not null default '[]'::jsonb,
  application_deadline timestamptz,
  estimated_acceptance_rate numeric(5,2),
  estimated_hours_per_week int,
  moderation_state moderation_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  opportunity_id uuid not null references opportunities(id) on delete cascade,
  status application_status not null default 'submitted',
  resume_url text,
  answers jsonb not null default '[]'::jsonb,
  timeline jsonb not null default '[]'::jsonb,
  skill_match_score numeric(5,2),
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (profile_id, opportunity_id)
);

create table conversations (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid references opportunities(id) on delete set null,
  organization_id uuid references organizations(id) on delete set null,
  created_at timestamptz not null default now()
);

create table conversation_members (
  conversation_id uuid not null references conversations(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  last_read_at timestamptz,
  archived_at timestamptz,
  primary key (conversation_id, profile_id)
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  sender_profile_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  attachments jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  category text not null,
  title text not null,
  body text,
  payload jsonb not null default '{}'::jsonb,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table profile_badges (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  badge_key text not null,
  awarded_at timestamptz not null default now()
);

create table follows (
  follower_profile_id uuid not null references profiles(id) on delete cascade,
  followed_profile_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_profile_id, followed_profile_id)
);

create index opportunities_org_published_idx on opportunities (organization_id, published_at desc);
create index opportunities_kind_mode_idx on opportunities (opportunity_kind, work_mode);
create index applications_profile_status_idx on applications (profile_id, status);
create index applications_opportunity_status_idx on applications (opportunity_id, status);
create index notifications_profile_created_idx on notifications (profile_id, created_at desc);
create index messages_conversation_created_idx on messages (conversation_id, created_at desc);
