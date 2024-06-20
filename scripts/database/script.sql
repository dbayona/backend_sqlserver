
create table pacientes (
id int not null identity (1,1) primary key,
nombre varchar(40) not null,
edad int not null,
fecha_creacion datetime not null default getdate()
);

insert into pacientes (nombre, edad) values ('John Stockton', 48);
insert into pacientes (nombre, edad) values ('Stephen Curry', 26);

select * from pacientes;

------------------------------------------------------------------------------

create table personal (
id int not null identity(1,1) primary key,
nombre varchar(40) not null,
tipo varchar(12) not null,
fecha_creacion datetime not null default getdate()
);

insert into personal (nombre, tipo) values ('Michael Perez', 'Doctor');
insert into personal (nombre, tipo) values ('Jessica Gonzalez', 'Secretaria');
insert into personal (nombre, tipo) values ('Pedro Beltran', 'Doctor');

select * from personal;

---------------------------------------------------------------------------------

create table tratamientos (
id int not null identity(1,1) primary key, 
nombre varchar(30) not null, 
precio decimal not null, 
fecha_creacion datetime not null default getdate()
);

insert into tratamientos (nombre, precio) values ('Limpieza', 25);
insert into tratamientos (nombre, precio) values ('Calzas', 35);
insert into tratamientos (nombre, precio) values ('Extracción', 40);

select * from tratamientos;

---------------------------------------------------------------------------

create table facturas (
id int not null identity(1,1) primary key,
id_paciente int not null foreign key references pacientes(id),
id_personal int not null foreign key references personal(id),
total decimal(18,2) not null,
fecha_emision datetime not null default getdate()
);

insert into facturas (id_paciente, id_personal, total) values(1, 1, 25);
insert into facturas (id_paciente, id_personal, total) values(2, 3, 75);

select * from facturas

----------------------------------------------------------------------------

create table pagos(
id int not null identity(1,1) primary key,
id_cliente int not null foreign key references pacientes(id),
id_factura int not null foreign key references facturas(id),
saldo_factura decimal(18,2) not null,
fecha_pago datetime not null default getdate()
)

----------------------------------------------------------------------------

Create PROCEDURE dbo.uspGetFactura @id int
as
    SELECT * FROM facturas where id = @id
GO

exec dbo.uspGetFactura @id = 2

------------------------------------------------------------------------------

Create PROCEDURE dbo.uspAddPersonal @nombre VARCHAR(40), @tipo VARCHAR(20)
as
    insert into personal (nombre, tipo) values (@nombre, @tipo);
go

exec dbo.uspAddPersonal @nombre='Docker Service', @tipo='Aplicacion'