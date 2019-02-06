import React from 'react';

const seasonFinder = (lattitude, month) => {
  if (month >= 3 && month <= 8) {
    return lattitude > 0 ? 'summer' : 'winter'
  }
  if ((month >= 0 && month <= 2) || (month >= 9 && month <= 11)) {
    return lattitude > 0 ? 'winter' : 'summer'
  }
}

const SeasonalDisplay = props => {
  const { lattitude, month } = props;
  const season = seasonFinder(lattitude, month);

  const display = season === 'winter' ? 'Burr, it is freezing' : 'It\'s too hot';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`}/>
      <h1>{display}</h1>
      <i className={`${icon} icon`}/>
    </div>
  )
}

export default SeasonalDisplay;
