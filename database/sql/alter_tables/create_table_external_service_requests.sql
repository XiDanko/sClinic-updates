create table external_service_requests
(
    id                bigserial
        primary key,
    clinic_id         bigint                                            not null,
    provider_id       bigint                                            not null,
    service_id        bigint                                            not null,
    patient_id        bigint                                            not null,
    treatment_plan_id bigint                                            not null,
    invoice_id        bigint,
    invoice_item_id   bigint,
    center_cost       integer,
    clinic_cost       integer,
    total             integer,
    notes             text,
    status            varchar(255) default 'pending'::character varying not null,
    delivered_at      timestamp(0),
    created_at        timestamp(0),
    updated_at        timestamp(0)
);

alter table external_service_requests
    owner to postgres;

create index external_service_requests_clinic_id_index
    on external_service_requests (clinic_id);

create index external_service_requests_provider_id_index
    on external_service_requests (provider_id);

create index external_service_requests_service_id_index
    on external_service_requests (service_id);

create index external_service_requests_patient_id_index
    on external_service_requests (patient_id);

create index external_service_requests_treatment_plan_id_index
    on external_service_requests (treatment_plan_id);

create index external_service_requests_invoice_id_index
    on external_service_requests (invoice_id);

create index external_service_requests_invoice_item_id_index
    on external_service_requests (invoice_item_id);

