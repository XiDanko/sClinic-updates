create table payment_methods
(
    id         bigserial
        primary key,
    name       varchar(255)          not null,
    "order"    integer               not null,
    is_default boolean default false not null,
    is_active  boolean default true  not null,
    created_at timestamp(0),
    updated_at timestamp(0)
);

alter table payment_methods
    owner to postgres;

create index payment_methods_name_index
    on payment_methods (name);

