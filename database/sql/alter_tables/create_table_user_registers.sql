create table user_registers
(
    id          bigserial
        primary key,
    user_id     bigint not null,
    register_id bigint not null,
    created_at  timestamp(0),
    updated_at  timestamp(0)
);

alter table user_registers
    owner to postgres;

create index user_registers_user_id_index
    on user_registers (user_id);

create index user_registers_register_id_index
    on user_registers (register_id);

