--Question 2 a)
SELECT
	e.first_name,
	e.last_name,
	el.leave_date_from,
	el.leave_date_to,
	elst."type"
FROM
	employee_leave el
INNER JOIN
	employee e 
	ON el.employee_id = e.id 
INNER JOIN
	employee_leave_status_type elst 
	ON el.employee_leave_status_type_id  = elst.id
WHERE
	'2022-05-24' BETWEEN leave_date_from AND leave_date_to
	AND employee_leave_status_type_id = 2

--Question 2 b)
SELECT 
	e.first_name,
	e.last_name,
	el.leave_date_from,
	el.leave_date_to,
	elst."type"
FROM 
	employee_leave el 
INNER JOIN
	employee_leave_status_type elst 
	ON el.employee_leave_status_type_id  = elst.id
INNER JOIN 
	employee e 
	ON e.id = el.employee_id 
WHERE 
	leave_date_from BETWEEN '2022-12-01' AND '2022-12-31' AND employee_leave_status_type_id = 2
	
--	Question 2 c)
SELECT 
	e.first_name,
	e.last_name,
	el.leave_date_from,
	el.leave_date_to,
	elst."type" 
FROM 
	employee_leave el 
INNER JOIN
	employee_leave_status_type elst 
	ON el.employee_leave_status_type_id  = elst.id
INNER JOIN 
	employee e 
	ON e.id = el.employee_id 
WHERE
	elst.id = 3 AND leave_date_from > date() 