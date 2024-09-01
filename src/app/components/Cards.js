import React from 'react'


const Cards = () => {
  return (
    <div>
              <div className="container mx-auto w-10/12 bg-card-background text-white">
        <ul
          id="cards"
          className="list-none p-0 grid gap-[var(--cardMargin)] mb-[var(--cardMargin)]"
          style={{
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(var(--cards), var(--cardHeight))",
          }}
        >
          <li
            className="card sticky top-20 pt-[calc(var(--index) * var(--cardTopPadding))]"
            id="card1"
            style={{ "--index": 1 }}
          >
            <div className="card-body bg-card1 h-[var(--cardHeight)] p-6 rounded-[30px] shadow-card flex items-center justify-center transition-all duration-500">
              <h2 className="text-4xl">Card 1</h2>
            </div>
          </li>
          <li
            className="card sticky top-24 pt-[calc(var(--index) * var(--cardTopPadding))]"
            id="card2"
            style={{ "--index": 2 }}
          >
            <div className="card-body bg-card2 h-[var(--cardHeight)] p-6 rounded-[30px] shadow-card flex items-center justify-center transition-all duration-500">
              <h2 className="text-4xl">Card 2</h2>
            </div>
          </li>
          <li
            className="card sticky top-28 pt-[calc(var(--index) * var(--cardTopPadding))]"
            id="card3"
            style={{ "--index": 3 }}
          >
            <div className="card-body bg-card3 h-[var(--cardHeight)] p-6 rounded-[30px] shadow-card flex items-center justify-center transition-all duration-500">
              <h2 className="text-4xl">Card 3</h2>
            </div>
          </li>
          <li
            className="card sticky top-32 pt-[calc(var(--index) * var(--cardTopPadding))]"
            id="card4"
            style={{ "--index": 4 }}
          >
            <div className="card-body bg-card4 h-[var(--cardHeight)] p-6 rounded-[30px] shadow-card flex items-center justify-center transition-all duration-500">
              <h2 className="text-4xl">Card 4</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cards