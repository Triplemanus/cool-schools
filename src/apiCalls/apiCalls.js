export const fetchAllSchools = async () => {
  const url = 'https://api.schooldigger.com/v1.2/schools?st=CO&level=High&nearLatitude=39.7506294&nearLongitude=-104.9966207&distanceMiles=20&appID=d04b0481&appKey=0c80520db8adfa4e8be1ea61724e1f24';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ('There was an error getting your data.');
  }
  const schools = await response.json();
  return schools
}

