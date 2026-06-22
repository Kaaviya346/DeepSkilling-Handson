--Author : Kaaviya R
--Exercise 3 : Stored Procedures

SET SERVEROUTPUT ON;

--Creating Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);


--Inserting values into Accounts table
INSERT INTO Accounts
VALUES (101, 'Kaaviya', 'Savings', 20000);

INSERT INTO Accounts
VALUES (102, 'Kaarthika', 'Savings', 15000);

INSERT INTO Accounts
VALUES (103, 'Kishore', 'Current', 30000);

INSERT INTO Accounts
VALUES (104, 'Flavia', 'Savings', 10000);

INSERT INTO Accounts
VALUES (105, 'Tej', 'Current', 21000);

COMMIT;

--Displaying Accounts table
SELECT * FROM Accounts;


--Creating Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

--Inserting Values Into Employees Table.
INSERT INTO Employees
VALUES (1, 'Kaaviya', 'IT', 50000);

INSERT INTO Employees
VALUES (2, 'Kaarthika', 'IT', 60000);

INSERT INTO Employees
VALUES (3, 'Flavia', 'HR', 45000);

INSERT INTO Employees
VALUES (4, 'Teju', 'Finance', 55000);

COMMIT;

--Displaying Employees Table
SELECT * FROM Employees;

--Scenario 1: The bank needs to process monthly interest for all savings accounts.
--Question: Write a stored procedure ProcessMonthlyInterest that calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance.

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest Processed');

END;
/
--Executing ProcessMonthlyInterest Procedure
EXEC ProcessMonthlyInterest; 

--Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
--Question: Write a stored procedure UpdateEmployeeBonus that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus Updated');

END;
/
--Executing UpdateEmployeeBonus Procedure
EXEC UpdateEmployeeBonus('IT',10);

SELECT * FROM Employees;

--Scenario 3: Customers should be able to transfer funds between their accounts.
--Question: Write a stored procedure TransferFunds that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.

CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;

END;
/

--Executing TransferFunds Procedure
EXEC TransferFunds(101,102,5000);

SELECT * FROM Accounts;