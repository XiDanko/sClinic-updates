create table updates
(
    id               bigserial
        primary key,
    version          varchar(255) not null,
    previous_version varchar(255) not null,
    created_at       timestamp(0),
    updated_at       timestamp(0)
);

alter table updates
    owner to postgres;

