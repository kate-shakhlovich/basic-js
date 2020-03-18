const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || !sampleActivity) return false;
  const sampleActivityValue = parseFloat(sampleActivity);
  if (isNaN(sampleActivityValue) || sampleActivityValue <= 0 || sampleActivityValue > MODERN_ACTIVITY) return false;
  const time = Math.log(MODERN_ACTIVITY / sampleActivityValue) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(time);
};
