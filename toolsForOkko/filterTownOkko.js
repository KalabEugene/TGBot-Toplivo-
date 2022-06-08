import fs from 'fs'

let data = fs.readFileSync('./fuelMapOkko.json'); 
 let fuelMap = JSON.parse(data); 

 export function filterTownOkko(town, ctx) {let array = fuelMap.data.layout[0].data.list.collection.filter((obj) => {
  return obj.attributes.Naselenyy_punkt === town;
});
return array
} 

/* export function filterTown(town, ctx) {let array = fuel.data.stations.filter((obj) => {
    return obj.city === town;
  });
  return array
}
 */