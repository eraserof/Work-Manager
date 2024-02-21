-- Creation of users table
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Creation of the users table
CREATE TABLE IF NOT EXISTS users (
	-- default, default a value
	--  gen_random_uuid() is function that will generate a random uuid on creation
	id uuid DEFAULT gen_random_uuid(),
	first_name varchar(250),
	last_name varchar(250),
	email varchar(250),
	account_password varchar(250),
	user_name varchar(250),
	-- created field will default to the value of NOW(); a postgres function
	created timestamptz DEFAULT NOW(),
	PRIMARY KEY (id)
);

-- Creation of the sequence that will be used in the entity_status table
CREATE SEQUENCE IF NOT EXISTS Entity_Status_Sequence
INCREMENT 1
START 0;

-- Creation of entity_status table
CREATE TABLE IF NOT EXISTS entity_status (
	-- default, default a value
	--  gen_random_uuid() is function that will generate a random uuid on creation
	id SMALLINT default nextval('Entity_Status_Sequence'),
	status_value varchar(50),
	PRIMARY KEY (id)
);

-- Creation of work table
CREATE TABLE IF NOT EXISTS work (
	-- default, default a value
	--  gen_random_uuid() is function that will generate a random uuid on creation
	id uuid DEFAULT gen_random_uuid(),
	admin_id uuid,
	worker_id uuid,
	entity_status SMALLINT,
	work_title varchar(250),
	work_description varchar(250),
	work_start_date timestamptz,
	status_change_date timestamptz,
	-- created field will default to the value of NOW(); a postgres function
	created timestamptz DEFAULT NOW(),
	PRIMARY KEY (id),
	FOREIGN KEY(admin_id) 
    	REFERENCES users(id),
	FOREIGN KEY(worker_id) 
    	REFERENCES users(id),
	FOREIGN KEY(entity_status)
    	REFERENCES entity_status(id)
);

-- Creation of request table
CREATE TABLE IF NOT EXISTS request (
	-- default, default a value
	--  gen_random_uuid() is function that will generate a random uuid on creation
	id uuid DEFAULT gen_random_uuid(),
	requester_id uuid,
	work_order_id uuid,
	entity_status SMALLINT,
	request_title varchar(250),
	request_description varchar(250),
	request_start_date timestamptz,
	status_change_date timestamptz,
	-- created field will default to the value of NOW(); a postgres function
	created timestamptz DEFAULT NOW(),
	PRIMARY KEY (id),
    FOREIGN KEY(requester_id) 
    	REFERENCES users(id),
	FOREIGN KEY(work_order_id) 
    	REFERENCES work(id),
	FOREIGN KEY(entity_status) 
    	REFERENCES entity_status(id)
);