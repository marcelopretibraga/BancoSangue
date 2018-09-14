

CREATE TABLE public.compatibilidadetiposanguineo (
    cd_compatibilidade integer NOT NULL,
    cd_tiposanguineo character varying(2) NOT NULL,
    cd_tipo integer NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now()
);



CREATE TABLE public.doador (
    cd_doador integer NOT NULL,
    nm_doador character varying(100),
    nr_cpf character varying(20) NOT NULL,
    nr_rg character varying(20) NOT NULL,
    nr_telefone character varying(15),
    dt_nascimento date NOT NULL,
    st_doador boolean NOT NULL,
    qt_pesodoador numeric(15,2) NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now(),
    cd_endereco integer NOT NULL
);




CREATE TABLE public.endereco (
    cd_endereco integer NOT NULL,
    nm_logradouro character varying(100),
    nr_numero integer NOT NULL,
    ds_complemento character varying(250) NOT NULL,
    ds_bairro character varying(100),
    nr_cep integer NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now(),
    cd_municipio integer NOT NULL
);



--

CREATE TABLE public.estado (
    cd_estado integer NOT NULL,
    ds_estado character varying(100),
    sg_estado character varying(2) NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now()
);



CREATE TABLE public.municipio (
    cd_municipio integer NOT NULL,
    ds_municipio character varying(100) NOT NULL,
    qt_domicilios integer,
    qt_populacao integer,
    vl_pib numeric(18,2),
    cd_estado integer NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now()
);



CREATE TABLE public.tiposanguineo (
    cd_tiposanguineo character varying(2) NOT NULL,
    dt_record timestamp without time zone DEFAULT now(),
    dt_update timestamp without time zone DEFAULT now()
);






INSERT INTO public.estado (cd_estado, ds_estado, sg_estado, dt_record, dt_update) VALUES (1, 'Paraná', 'PR', '2018-08-24 22:15:15.718039', '2018-08-24 22:15:15.718039');
INSERT INTO public.estado (cd_estado, ds_estado, sg_estado, dt_record, dt_update) VALUES (2, 'Santa Catarina', 'SC', '2018-08-24 22:16:47.43728', '2018-08-24 22:16:47.43728');
INSERT INTO public.estado (cd_estado, ds_estado, sg_estado, dt_record, dt_update) VALUES (6, 'Teste Estado', 'xz', '2018-08-31 22:58:49.857', '2018-08-31 22:58:49.857');
INSERT INTO public.estado (cd_estado, ds_estado, sg_estado, dt_record, dt_update) VALUES (5, 'alterado codigo 5', 'xr', '2018-08-31 23:02:38.46', '2018-08-31 23:02:38.46');
INSERT INTO public.estado (cd_estado, ds_estado, sg_estado, dt_record, dt_update) VALUES (8, 'Parana', 'PR', '2018-09-01 01:00:46.52', '2018-09-01 01:00:46.52');


