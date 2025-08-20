create table allergy_medical_history
(
    id                 bigserial
        primary key,
    medical_history_id bigint not null,
    allergy_id         bigint not null,
    created_at         timestamp(0),
    updated_at         timestamp(0)
);

alter table allergy_medical_history
    owner to postgres;

create index allergy_medical_history_medical_history_id_index
    on allergy_medical_history (medical_history_id);

create index allergy_medical_history_allergy_id_index
    on allergy_medical_history (allergy_id);

