create table appointment_procedure
(
    id             bigserial
        primary key,
    appointment_id bigint,
    procedure_id   bigint not null,
    created_at     timestamp(0),
    updated_at     timestamp(0)
);

alter table appointment_procedure
    owner to postgres;

create index appointment_procedure_appointment_id_index
    on appointment_procedure (appointment_id);

create index appointment_procedure_procedure_id_index
    on appointment_procedure (procedure_id);

