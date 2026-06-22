--Author : Kaaviya R
--Exercise 1 : Control Structures

SET SERVEROUTPUT ON;

--Creating Customers Table
CREATE TABLE Customers(
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5)
);

--Inserting Values into Customers Table
INSERT INTO Customers VALUES (1,'Kaaviya',65,15000,'No');
INSERT INTO Customers VALUES (2,'Kaarthika',45,8000,'No');
INSERT INTO Customers VALUES (3,'Flavia',70,20000,'No');

COMMIT;

--Creating Loans Table
CREATE TABLE Loans(
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE
);

--Inserting Values Into Loans Table
INSERT INTO Loans VALUES (101,1,8.5,SYSDATE+10);
INSERT INTO Loans VALUES (102,2,7.5,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,9.0,SYSDATE+20);

COMMIT;

SELECT * FROM Customers;

SELECT * FROM Loans;

--Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
--Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.

DECLARE
    CURSOR c_customer IS
        SELECT c.CustomerID,
               l.LoanID,
               l.InterestRate,
               c.Age
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID;
BEGIN

    FOR rec IN c_customer LOOP      -- Loop Records

        IF rec.Age > 60 THEN        -- Age Check

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;   -- Update Rate

        END IF;

    END LOOP;

    COMMIT;                         -- Save Changes

    DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully.');

END;
/

--Scenario 2: A customer can be promoted to VIP status based on their balance.
--Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

DECLARE
    CURSOR c_vip IS
        SELECT CustomerID,
               Balance
        FROM Customers;
BEGIN

    FOR rec IN c_vip LOOP           -- Loop Records

        IF rec.Balance > 10000 THEN -- Balance Check

            UPDATE Customers
            SET IsVIP = 'Yes'
            WHERE CustomerID = rec.CustomerID; -- Set VIP

        END IF;

    END LOOP;

    COMMIT;                         -- Save Changes

    DBMS_OUTPUT.PUT_LINE('VIP customers updated successfully.');

END;
/

--Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
--Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.

DECLARE
    CURSOR c_reminder IS
        SELECT c.CustomerName,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE
                            AND SYSDATE + 30;
BEGIN

    FOR rec IN c_reminder LOOP      -- Loop Records

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || rec.CustomerName
            || ', Loan '
            || rec.LoanID
            || ' is due on '
            || TO_CHAR(rec.DueDate,'DD-MON-YYYY')
        );                          -- Print Message

    END LOOP;

END;
/