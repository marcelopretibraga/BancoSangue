CREATE TABLE impedimentosTemp (
	cd_impedimento serial NOT NULL PRIMARY KEY,
	ds_tipoImpedimento VARCHAR(255),
	cd_doador INTEGER REFERENCES doador,
	dt_cadastro DATE
);
