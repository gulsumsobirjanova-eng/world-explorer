import fetch from 'node-fetch';

async function testUrl(name: string, url: string) {
  try {
    const res = await fetch(url);
    console.log(`${name} status:`, res.status);
    if (res.ok) {
      const data: any = await res.json();
      console.log(`${name} length:`, Array.isArray(data) ? data.length : 'not array');
      if (Array.isArray(data) && data.length > 0) {
        console.log(`${name} sample name:`, data[0].name);
        console.log(`${name} sample cca3:`, data[0].cca3);
        console.log(`${name} sample flags:`, data[0].flags);
        console.log(`${name} sample capital:`, data[0].capital);
        console.log(`${name} sample population:`, data[0].population);
        console.log(`${name} sample borders:`, data[0].borders);
      }
    }
  } catch (err) {
    console.log(`Error testing ${name}:`, err);
  }
}

async function run() {
  await testUrl('Fedeperin Restcountries Back', 'https://raw.githubusercontent.com/fedeperin/restcountries-back/main/all.json');
  await testUrl('Teeny-ducks Restcountries Backup', 'https://raw.githubusercontent.com/teeny-ducks/restcountries-backup/main/all.json');
  await testUrl('Iamspruce public data countries', 'https://raw.githubusercontent.com/iamspruce/intro-to-react/main/public/data/countries.json');
}

run();
