create table expenses_titles
(
    id         bigserial
        primary key,
    title      varchar(255)         not null,
    is_active  boolean default true not null,
    created_at timestamp(0),
    updated_at timestamp(0)
);

alter table expenses_titles
    owner to postgres;

create index expenses_titles_title_index
    on expenses_titles (title);

