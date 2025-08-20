create table complain_general_assessment
(
    id                    bigserial
        primary key,
    complain_id           bigint not null,
    general_assessment_id bigint not null,
    created_at            timestamp(0),
    updated_at            timestamp(0)
);

alter table complain_general_assessment
    owner to postgres;

create index complain_general_assessment_complain_id_index
    on complain_general_assessment (complain_id);

create index complain_general_assessment_general_assessment_id_index
    on complain_general_assessment (general_assessment_id);

