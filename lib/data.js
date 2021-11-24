
export async function fetchData() {

    let json;
  
    try {
      const result = await fetch('./data.json');
  
      if (!result.ok) {
        throw new Error('result not ok');
      }
  
      json = await result.json();
    } catch (e) {
      console.warn('unable to fetch', e);
      return null;
    }
  
    return json;
  }