create table test_lab_visitation
(
    id                bigserial
        primary key,
    test_id       bigint not null,
    lab_visitation_id bigint not null,
    created_at        timestamp(0),
    updated_at        timestamp(0)
);

alter table test_lab_visitation
    owner to postgres;

create index test_lab_visitation_test_id_index
    on test_lab_visitation (test_id);

create index test_lab_visitation_lab_visitation_id_index
    on test_lab_visitation (lab_visitation_id);

