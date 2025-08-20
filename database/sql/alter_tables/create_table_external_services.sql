create table external_services
(
    id          bigserial
        primary key,
    name        varchar(255)         not null,
    is_active   boolean default true not null,
    click_count integer default 0    not null,
    created_at  timestamp(0),
    updated_at  timestamp(0)
);

alter table external_services
    owner to postgres;

create index external_services_name_index
    on external_services (name);

