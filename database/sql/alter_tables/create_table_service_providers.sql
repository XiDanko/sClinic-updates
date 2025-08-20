create table service_providers
(
    id           bigserial
        primary key,
    name         varchar(255)         not null,
    phone_number varchar(255),
    is_active    boolean default true not null,
    created_at   timestamp(0),
    updated_at   timestamp(0)
);

alter table service_providers
    owner to postgres;

create index service_providers_name_index
    on service_providers (name);

