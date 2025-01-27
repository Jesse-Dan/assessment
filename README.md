***ASSESMENT ANSWERS IN MARKDOWN - [ THIS WAS CONVERTED AND COMPILED BY JESSE DAN ]***
***YOU WOULD FIND A PDF DOCUMENT ATTACHED TO THIS PROJECT WITH THE ANSWERS AS WERE COMPILED.***
***DEFINITIONS MAY DIFFER AS I FOUND BETTER WAYS TO STRUCURE MY SENTENCES WHILE PROOF READING***

### Section A: General Knowledge  
**1. Security Considerations**  

**Encrypt Data**  
- While data is in transit: Use TLS (Transport Layer Security) to protect data as it moves between users and servers.  
- Encrypt sensitive data stored in databases (e.g., customer details, transactions) using strong encryption like AES-256.  

**Strong Authentication**  
- Implement multi-factor authentication (MFA) to verify user identities.  
- Enforce strong password policies and require regular updates.  

**Access Control**  
- Use Role-Based Access Control (RBAC) to ensure users only access data and features relevant to their roles.  
- Regularly review and update permissions to prevent unauthorized access.  

**Secure APIs**  
- Validate and sanitize all inputs to prevent attacks like SQL injection.  
- Use API gateways and rate limiting to control access and prevent abuse.  

**Comply with Regulations**  
- Follow industry standards like GDPR (data privacy), PCI DSS (payment security), and PSD2 (EU payment rules).  
- Stay updated with local regulations, such as CBN guidelines for fintechs in Nigeria.  

**Fraud Detection**  
- Facilitate real-time monitoring and anomaly detection to identify suspicious activity.  
- Use machine learning models to recognize patterns that indicate fraud. Set up alerts for anomalous transactions (e.g., large transfers, multiple failed login attempts).  

**Secure Coding Practices**  
- Follow secure coding guidelines to avoid vulnerabilities like XSS and CSRF.  
- Regularly review code and conduct security testing (e.g., static and dynamic analysis).  
- Use dependency scanning tools to identify vulnerabilities in third-party libraries.  

**Data Privacy**  
- Only collect data to the minimum extent required.  
- Anonymize or pseudonymize sensitive information where possible. Provide users with transparency and control over their data (e.g., opt-in/opt-out).  

**Logging and Monitoring**  
- Keep meticulous records of all user activity and transactions for auditing and forensic examination.  
- Watch logs in real-time for detection and response to security breaches in a timely manner.  

**Backup and Recovery**  
- Regularly back up critical data and test recovery processes.  
- Have a business continuity plan to ensure operations continue during outages or breaches.  

---

**2. PCI-DSS vs GDPR**  

| **PCI-DSS**                                                                 | **GDPR**                                                                 |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Secures payment card data (e.g., credit/debit card numbers).                | Protects all personal data (e.g., names, addresses, financial info) of EU/EEA residents. |
| Applies globally to any organization handling card payments.                | Primarily EU/EEA-focused but impacts any global business processing EU/EEA data. |
| Prevents fraud, builds customer trust, and avoids fines or loss of payment capabilities. | Ensures data privacy, gives users control over their data, and avoids heavy fines (up to 4% of global revenue). |

---

**3. What is Idempotency?**  
The concept of Idempotency entails that performing the same operation multiple times is the same as performing it once. In banking, re-sending a transaction request (in case of retries) will never cause double charges or duplicates. It is crucial for several reasons, including:  
- **Prevents Duplicates**: Avoids double charges or transfers.  
- **Ensures Consistency**: Keeps account balances accurate.  
- **Improves UX**: Users can retry failed transactions safely.  
- **Simplifies Errors**: Handles retries without reprocessing.  
- **Builds Trust**: Ensures reliability and compliance.  

---

**4. Risks of Handling Sensitive Customer Data**  
- **Data Breaches**: Unauthorized access to sensitive info (e.g., credit card numbers, personal data).  
- **Financial Fraud**: Stolen data used for identity theft or unauthorized transactions.  
- **Reputational Damage**: Loss of customer trust and brand credibility.  
- **Regulatory Penalties**: Fines for non-compliance with laws like GDPR or PCI-DSS.  
- **Operational Disruption**: Breaches can cause downtime and revenue loss.  

**Mitigation Strategies**  
- **Encrypt Data**: Use strong encryption (e.g., AES-256) for data in transit (TLS) and at rest (databases).  
- **Access Controls**: Implement Role-Based Access Control (RBAC) to restrict data access.  
- **Security Audits**: Regularly test systems for vulnerabilities and fix weaknesses.  
- **Compliance**: Follow regulations like GDPR and PCI-DSS to avoid fines.  
- **Employee Training**: Teach staff to recognize phishing and handle data securely.  
- **Multi-Factor Authentication (MFA)**: Add an extra layer of security for system access.  
- **Monitoring and Logging**: Track data access in real-time to detect suspicious activity.  
- **Data Backups**: Regularly back up data and test recovery processes.  
- **Third-Party Security**: Ensure vendors comply with security standards.  
- **Incident Response Plan**: Prepare and test a plan to respond to breaches quickly.  

---

### Section B: Backend Development  
**1. ACID Properties**  
ACID (Atomicity, Consistency, Isolation, Durability) ensures the reliability and integrity of financial transactions in databases. These properties are critical for financial applications to maintain accuracy, dependability, and security.  

| **ACID Property** | **What It Means**                                                                 | **What It Does for You**                                                                 |
|--------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Atomicity**      | Transactions are all-or-nothing. If one part fails, the whole transaction is rolled back. | Prevents partial updates (e.g., money debited but not credited). Ensures transactions complete fully or not at all. |
| **Consistency**    | Transactions keep data valid and accurate, following rules (e.g., no negative balances). | Ensures financial data stays correct and reliable after every transaction. |
| **Isolation**      | Transactions run independently, even when happening at the same time. | Stops issues like double-spending or incorrect reads during high activity (e.g., multiple transfers). |
| **Durability**     | Once a transaction is done, it's permanent—even if the system crashes. | Guarantees completed transactions (e.g., payments) aren’t lost, building trust in the system. |

---

**2. Encryption Essentials**  
Encryption plays a significant role in protecting sensitive information during bank transactions and is an important security feature to safeguard the secure and confidential transmission of important information.  

| **Function**                | **What It Means**                                                                 | **What It Does for You**                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Protects Data in Transit** | Encrypts data (e.g., account numbers, transaction details) during transmission. | Prevents hackers from intercepting and stealing sensitive information. |
| **Secures Data at Rest**    | Encrypts stored data (e.g., customer details, transaction records). | Ensures stolen data remains unreadable. |
| **Prevents Unauthorized Access** | Restricts decryption to authorized parties. | Reduces insider/external threats. |
| **Ensures Compliance**      | Meets PCI-DSS, GDPR requirements. | Avoids fines and legal issues. |
| **Builds Customer Trust**   | Demonstrates commitment to security. | Increases user confidence. |

**My Approach**  
My method of bank transaction security encryption would be to create an in-house package or SDK. It would manage data encryption, format conversion, and encrypt all responses before transmission. This ensures consistency and reusability across microservices.  

---

**3. JWT Token Login Flow**  
- **User Logs In**: The user enters credentials (username/password) on the server.  
- **JWT Creation**: Server generates a signed JWT containing user data (e.g., ID).  
- **Token Delivery**: JWT is sent to the client and stored securely (cookies/local storage).  
- **Future Requests**: Client includes JWT in the `Authorization` header.  
- **Token Verification**: Server validates the signature and expiration.  
- **Access Granted**: Valid tokens grant resource access.  

---

**4. Handling Simultaneous Transactions**  

| **Mechanism**               | **Use Case**                                | **Implementation**                                                                 |
|-----------------------------|---------------------------------------------|------------------------------------------------------------------------------------|
| **Optimistic Concurrency Control** | Low-contention scenarios. | Version/timestamp checks; reject mismatched updates. |
| **Pessimistic Locking**     | High-contention scenarios. | Row-level locks (e.g., `SELECT ... FOR UPDATE`). |
| **Idempotency**             | External APIs (e.g., payments). | Unique transaction IDs to prevent reuse. |
| **Atomic Operations**       | Single-step updates. | Database commands (e.g., `UPDATE ... WHERE ...`). |

---



### Section B: Backend Development  

**1. Building a secure Express.js API**  

I have successfully built and implemented a secure Express.js API hat processes a funds transfer request securely, i have done this in both JavaScript and TypeScript.

- I ensured that Input validation is effective by building a middleware interface to intercept and   validate request before getting to the service layer. The validation performed by the api are as listed below:
    - fromAccount, toAccount, amount validations for missing required fields
    - amount validity as a positive number and of type `number`
    - fromAccount, toAccount validity as not being same account (i.e user cannot transfer to self)

- I also made sure to cater for proper error handling by building a logger congifuration to aid for debugging. This effort here also provides a log file to store logs. Storing logs inturn gives us the ability to look back into the past and see the behaviour of our code (errors and otherwise) which helps mitigate issues quickly during debugging.

``` ts
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
```

Output:
```sql
{"level":"info","message":"Transaction saved: {\"id\":\"085c27ad-f58a-4721-b705-7d9d3b73af43\",\"fromAccount\":\"12345\",\"toAccount\":\"67890\",\"amount\":100,\"timestamp\":\"2025-01-27T20:12:30.764Z\"}"}
{"level":"warn","message":"Missing required fields"}
{"level":"info","message":"Server is running on http://localhost:3000"}
{"level":"warn","message":"Missing required fields"}
{"level":"info","message":"Transaction saved: {\"id\":\"54ee3fe3-6537-472b-beb4-95c858130cd7\",\"fromAccount\":\"12345\",\"toAccount\":\"67890\",\"amount\":100,\"timestamp\":\"2025-01-27T20:15:05.572Z\"}"}
{"level":"info","message":"Server is running on http://localhost:3000"}
```
- And finally to address the `Prevention of duplicate transactions`, by cross-referencing if a transaction with similar details exists with a diffrence of less than 5 seconds apart fromm the initiated transaction and flagging it as duplicate. This measure also acts as a safegaurd to allow for settlement callbacks before a transaction with same details can go through. It also allows for a minimally invasive step agains DOS attack, as it safely reduces the amount of transaction possible from a single user.


**2. Optimizing SQL Query**  

``` sql
SELECT transaction_id, amount, date, status 
FROM transactions 
WHERE customer_id = 12345
ORDER BY date DESC 
LIMIT 50;
```

To arrive as the optimized query above i have both taken and avoided some typical practices. Here I have listed the steps i took

1. **Avoid `SELECT *`**  
   - Instead of fetching *all* columns (`SELECT *`),i would explicitly list only the ones you need (e.g., `transaction_id, amount, date, status`).  
   - **Why?** Fewer columns = less data transferred and processed → faster queries.

2. **Indexing the `customer_id` and `date`**  
   - I would add a **composite index** on `(customer_id, date)`.  
   - **Why?** This lets the database:  
     - Instantly find all transactions for `customer_id = 12345` (no full table scan).  
     - Return results already sorted by `date DESC`, skipping the sorting step.  

3. **Add `LIMIT` (If Applicable)**  
   - Limiting results (e.g., `LIMIT 50`) reduces the number of rows processed and returned.  
   - **Why?** Sometimes most users would not need 10,000 transactions at once, this speeds up both the query and the app.

4. **Fix Data Types**  
   - If `customer_id` is stored as a number (e.g., `INT`), remove quotes (`12345` instead of `'12345'`).  
   - **Why?** Using quotes force the database to convert the number to a string, which adds overhead.

---

### **Real-World Impact for a Microfinance Bank:**  
- **Quick Transactions Page Load:** Most users would only wait a few seconds to see their history.  
- **Lower Server Load:** Efficient queries reduce server CPU/memory usage, letting the database handle more users.  
- **Cost Efficient:** When using cost sensitive app hosting services like AWS and GoogleCloud, Efficient Queries can help avoid the need for multiple queries, and in the process save cost. 
- **Scalability:** Using indexes ensure performance stays consistent even as transaction data grow.  

Additionally, If the app shows paginated results (e.g., "Load More"), using `OFFSET` and `LIMIT` together would avoid pulling all data at once.


---
REGARDS<br>JESSE OYOFO DAN-AMUDA.