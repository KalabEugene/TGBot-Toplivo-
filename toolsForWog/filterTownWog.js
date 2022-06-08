 import fs from 'fs'
 
 let data = fs.readFileSync('./fuelMapWog.json')
 let fuelMap = JSON.parse(data); 
 
 export function filterTownWog(town, ctx) {let array = fuelMap.data.stations.filter((obj) => {
  return obj.city === town;
});
return array
} 

/* export function filterTown(town, ctx) {let array = fuel.data.stations.filter((obj) => {
    return obj.city === town;
  });
  return array
}
 */