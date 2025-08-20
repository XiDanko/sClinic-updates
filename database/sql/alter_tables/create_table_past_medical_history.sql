create table past_medical_history
(
    id                 bigserial
        primary key,
    medical_history_id bigint not null,
    past_medical_id    bigint not null,
    created_at         timestamp(0),
    updated_at         timestamp(0)
);

alter table past_medical_history
    owner to postgres;

create index past_medical_history_medical_history_id_index
    on past_medical_history (medical_history_id);

create index past_medical_history_past_medical_id_index
    on past_medical_history (past_medical_id);

