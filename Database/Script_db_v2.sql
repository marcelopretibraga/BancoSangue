create table pontocoleta (
  cd_pontocoleta serial not null primary key,
  ds_pontocoleta varchar(120),
  cd_endereco integer references endereco
);


create table intervalodoacao (
  cd_intervalodoacao serial not null primary key,
  cd_doador integer,
  dt_ultimadoacao date,
  cd_pontocoleta integer
);

alter table intervalodoacao 
  add constraint intervalodoacao_pontocoleta_fk
  foreign key (cd_pontocoleta)
  references pontocoleta (cd_pontocoleta);


alter table intervalodoacao 
  add constraint intervalodoacao_doador_fk
  foreign key (cd_doador)
  references doador (cd_doador);


create table usuario (
  cd_usuario serial not null primary key,
  login_usuario varchar(60),
  senha_usuario varchar(60),
  email_usuario varchar(60)
);