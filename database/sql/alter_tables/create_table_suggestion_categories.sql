create table suggestion_categories
(
    id         bigserial
        primary key,
    clinic_id  bigint               not null,
    name       varchar(255)         not null,
    is_active  boolean default true not null,
    created_at timestamp(0),
    updated_at timestamp(0)
);

alter table suggestion_categories
    owner to postgres;

create index suggestion_categories_clinic_id_index
    on suggestion_categories (clinic_id);

create index suggestion_categories_name_index
    on suggestion_categories (name);

