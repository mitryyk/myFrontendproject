import { useEffect } from 'react';

export const Journal_Cl = () => {
  useEffect(() => {
    const apiUrl = 'https://site.gc-nn.com/api/lab?objectid=626&columns=protocolNumber,protocolDate,rzkittable';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => console.log('This is your data', data));
  }, []);

  return (
    <div>
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
      Journal_Cl
      <br />
    </div>
  );
};
