create table treatment_plans
(
    id               bigserial
        primary key,
    clinic_id        bigint       not null,
    patient_id       bigint       not null,
    session_number   integer,
    session_interval integer,
    status           varchar(255) not null,
    notes            varchar(255),
    plan             text,
    created_at       timestamp(0),
    updated_at       timestamp(0)
);

alter table treatment_plans
    owner to postgres;

create index treatment_plans_clinic_id_index
    on treatment_plans (clinic_id);

create index treatment_plans_patient_id_index
    on treatment_plans (patient_id);

create index treatment_plans_session_number_index
    on treatment_plans (session_number);

create index treatment_plans_session_interval_index
    on treatment_plans (session_interval);

create index treatment_plans_status_index
    on treatment_plans (status);

