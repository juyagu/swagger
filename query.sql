CREATE DATABASE cuv;
use cuv;

create table alumnos
(
id int not null primary key AUTO_INCREMENT,
nombre VARCHAR(60),
apellido VARCHAR(60),
curso VARCHAR(60)
);

insert into alumnos (nombre,apellido,curso)
values ('Jose','Perez','Angular5');
insert into alumnos (nombre,apellido,curso)
values ('Maria','Rodriguez','PHP');

