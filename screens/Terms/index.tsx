import styles from "./index.module.css";

const Terms = () => {
  return (
    <div className={styles.page}>
      <div title={"Terms and Conditions"} className={styles.container}>
        <div className={styles.containerSection}>
          <h1>Terms and Conditions</h1>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of fibi, Inc.'s Website, located at https://fibi.com/. By
            accessing this website we assume you accept these terms and
            conditions. Do not continue to use Vertex if you do not agree to
            take all of the terms and conditions stated on this page. The
            following terminology applies to these Terms and Conditions, Privacy
            Statement and Disclaimer Notice and all Agreements: "Client", "You"
            and "Your" refers to you, the person log on this website and
            compliant to the Company's terms and conditions. "The Company",
            "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
            "Parties", or "Us", refers to both the Client and ourselves.
          </p>
        </div>
        <div className={styles.containerSection}>
          <h3>Cookies</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `Unless otherwise stated, Fibi, Inc. and/or its licensors own the intellectual property rights for all material on Vertex. All intellectual property rights are reserved. You may access this from  Fibi for your own personal use subjected to restrictions set in these terms and conditions.
          You must not:
          Republish material from Fibi
          Sell, rent or sub-license material from Fibi
          Reproduce, duplicate or copy material from Fibi
          Redistribute content from Fibi
          This Agreement shall begin on the date hereof. Our Terms and  Conditions were created with the help of the Free Terms and Conditions Generator.
          
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Fibi, Inc. does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Fibi, Inc.,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Fibi, Inc. shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          
          Fibi, Inc. reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.`,
            }}
          />
        </div>
        <div className={styles.containerSection}>
          <h3>Content Liability</h3>
          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
        </div>
        <div className={styles.containerSection}>
          <h3>Disclaimer</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

              limit or exclude our or your liability for death or personal injury;
              limit or exclude our or your liability for fraud or fraudulent misrepresentation;
              limit any of our or your liabilities in any way that is not permitted under applicable law; or
              exclude any of our or your liabilities that may not be excluded under applicable law.
              
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
              
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terms;
