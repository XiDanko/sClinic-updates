create table lab_visitations
(
    id            bigserial
        primary key,
    visitation_id bigint not null,
    patient_id    bigint not null,
    report        text,
    created_at    timestamp(0),
    updated_at    timestamp(0)
);

alter table lab_visitations
    owner to postgres;

create index lab_visitations_visitation_id_index
    on lab_visitations (visitation_id);

create index lab_visitations_patient_id_index
    on lab_visitations (patient_id);

