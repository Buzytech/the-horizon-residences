import { Section } from 'lucide-react'
import React from 'react'
import styles from "./terms.module.css"

const Terms = () => {
  return (
  <section>
    <div className='horizonContainer'>
      <div className={styles.heading}>
        <h2>Terms and Conditions</h2>
      </div>
      <div className={styles.para}>
            <h3>1. INTRODUCTION</h3>
            <p>These Terms and Conditions ("Terms") govern the use of the website www.thehorizonresidences.com ("Website") operated by Harmony Infra Ventures Private Limited ("Company"), 
              incorporated under the Companies Act, 2013. By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, you may not access or use the Website.</p>

           <h3>2. DEFINITION</h3>  
           <p>"User", "You" refers to any person accessing or using the Website.
            "We", "Us", "Our" refers to Harmony Infra Ventures Private Limited.</p> 

            <h3>3. ELIGIBILITY</h3>  
           <p>You must be competent to contract under the Indian Contract Act, 1872 to access or use the Website.</p> 

           <h3>4. WEBSITE USE</h3>  
           <p>a) The Website provides information about The Horizon Residences, a real estate project by Harmony Infra Ventures.
            <br /> b) All content, including project descriptions, images, and amenities, is for general informational purposes and does not constitute a binding offer.
             <br />c) We reserve the right to modify or discontinue any aspect of the Website at our discretion.
             <br />d) You agree not to:
              <br /> Use the Website for unlawful purposes;
              <br /> Disrupt or damage the Website or its networks;
           <br /> Attempt unauthorized access to any part of the Website.</p> 

          <h3>5. INTELLECTUAL PROPERTY</h3>  
           <p>All content, graphics, and materials on the Website are the property of Harmony Infra Ventures or its licensors. Unauthorized use, copying, or distribution is prohibited.
</p> 

         <h3>6. THIRD-PARTY LINK</h3>  
           <p>The Website may contain links to third-party websites. We are not responsible for the content or practices of such websites and encourage users to read their terms and policies.</p> 

      <h3>7.  LIMITATION OF LIABILITY</h3>  
           <p>The Company shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Website.</p> 
       
       <h3>8. INDEMNITY</h3>  
           <p>You agree to indemnify and hold Harmony Infra Ventures harmless from any claims, damages, losses, or liabilities arising from your use of the Website or violation of these Terms.
</p> 

    </div>
    </div>

  </section>
  )
}

export default Terms
