create table radiology_visitations
(
    id            bigserial
        primary key,
    visitation_id bigint not null,
    patient_id    bigint not null,
    report        text,
    created_at    timestamp(0),
    updated_at    timestamp(0)
);

alter table radiology_visitations
    owner to postgres;

create index radiology_visitations_visitation_id_index
    on radiology_visitations (visitation_id);

create index radiology_visitations_patient_id_index
    on radiology_visitations (patient_id);

