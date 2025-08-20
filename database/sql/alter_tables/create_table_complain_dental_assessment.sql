create table complain_dental_assessment
(
    id                   bigserial
        primary key,
    complain_id          bigint not null,
    dental_assessment_id bigint not null,
    created_at           timestamp(0),
    updated_at           timestamp(0)
);

alter table complain_dental_assessment
    owner to postgres;

create index complain_dental_assessment_complain_id_index
    on complain_dental_assessment (complain_id);

create index complain_dental_assessment_dental_assessment_id_index
    on complain_dental_assessment (dental_assessment_id);

