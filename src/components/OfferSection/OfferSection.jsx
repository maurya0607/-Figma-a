import React from 'react';
import './OfferSection.css';

const OFFERS = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative and partnership'
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight'
  },
  {
    category: 'Delta laurel content, social, digital',
    title: 'Piloting digital con{emoji}dence',
    hasEmoji: true
  }
];

export default function OfferSection() {
  return (
    <section className="offer-section" id="offers">
      <div className="offer-container">
        
        <h2 className="offer-heading">
          What we <span className="highlight-pill">can</span><br />
          <span className="underline-brush">offer you!</span>
        </h2>

        <div className="offer-table-wrapper">
          <table className="offer-table">
            <tbody>
              {OFFERS.map((offer, idx) => (
                <tr key={idx} className="offer-row">
                  <td className="offer-category">
                    {offer.category}
                  </td>
                  <td className="offer-title-cell">
                    {offer.hasEmoji ? (
                      <>
                        Piloting digital confidence
                      </>
                    ) : (
                      offer.title
                    )}
                  </td>
                  <td className="offer-arrow-cell">
                    <span className="arrow-icon">→</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
