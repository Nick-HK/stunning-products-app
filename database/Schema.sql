USE `dev-test-database`;

create table Products
(
    uid         int auto_increment
        primary key,
    name        mediumtext null,
    ID          int        null,
    description longtext   null,
    colour      mediumtext null,
    size        int        null
);

create index Products_uid_index
    on Products (uid desc);

insert into Products (name, ID, description, colour, size)
values ('Sample Product', 1, 'Sample Description', 'red', 1);