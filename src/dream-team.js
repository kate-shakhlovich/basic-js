module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const arrFilterMembers = members.filter(elem => typeof elem === 'string' && elem);
  const letters = arrFilterMembers.map(member => member.trim().substring(0, 1).toUpperCase());
  return letters.sort().join('');
};