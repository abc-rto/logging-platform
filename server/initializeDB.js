const Building = require('./models/building');
// const Site = require('./api/sites/siteModel');
const Location = require('./models/location');
const mongoose = require('mongoose');
// const Measures = require('./api/measures/measuresModel');
// const SensorTypes = require('./api/sensorType/sensorTypeModel');
// const Telemetry = require('./api/telemetry/telemetryModel');
// const logger = require('./util/logger');

const buildings = [{
    id: 1,
    name: 'John Hugget',
    locations: [{
        id: 1,
        name: 'Unit 1',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 2,
        name: 'Unit 2',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 3,
        name: 'Unit 3',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    }]
},{
    id: 1,
    name: 'Crosshands',
    locations: [{
        id: 4,
        name: 'Unit 1',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 5,
        name: 'Unit 2',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 6 ,
        name: 'Unit 3',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    }]
},{
    id: 3,
    name: 'Y Twyni',
    locations: [{
        id: 7,
        name: 'Unit 1',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 8,
        name: 'Unit 2',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    },{
        id: 9,
        name: 'Unit 3',
        assets: [{
            id: 1,
            name: 'Grid',
            description: 'Import_Export',
            type: 'import_export',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power',
                    type: 'importExport',
                    uuid: 'uni1'      
                },
                {
                    id: 2,
                    name: 'energy_in',
                    type: 'import',
                    uuid: 'uni2'      
                },
                {
                    id: 3,
                    name: 'energy_out',
                    type: 'import',
                    uuid: 'uni3'      
                }
            ]
        },{
            id: 2,
            name: 'PV1',
            description: 'PV',
            type: 'generation',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'power_generation',
                    type: 'generation',
                    uuid: 'uni4'      
                },
                {
                    id: 2,
                    name: 'energy_generation',
                    type: 'generation',
                    uuid: 'uni5'      
                }
            ]
        },
        {
            id: 3,
            name: 'enviro1',
            description: 'environment parameters',
            type: 'environment',
            rating: 'rating',
            sensors: [
                {
                    id: 1,
                    name: 'temperature',
                    type: 'temperature',
                    uuid: 'uni6'      
                },
                {
                    id: 2,
                    name: 'humidity',
                    type: 'humidity',
                    uuid: 'uni7'      
                },
                {
                    id: 3,
                    name: 'co2',
                    type: 'co2',
                    uuid: 'uni7'      
                }
            ]
        }]
    }]
}];

// const sensorTypes = [{
//     id: 1,
//     isDeleted: false,
//     label: 'Solar PV',
//     parent: 10
// }, {
//     id: 2,
//     isDeleted: false,
//     label: 'Solar thermal',
//     parent: 10
// }, {
//     id: 3,
//     isDeleted: false,
//     label: 'Wind',
//     parent: 10
// }, {
//     id: 4,
//     isDeleted: false,
//     label: 'Heating',
//     parent: 11
// }, {
//     id: 5,
//     isDeleted: false,
//     label: 'Hot Water',
//     parent: 11
// }, {
//     id: 6,
//     isDeleted: false,
//     label: 'Lights',
//     parent: 11
// }, {
//     id: 7,
//     isDeleted: false,
//     label: 'Small power',
//     parent: 11
// }, {
//     id: 8,
//     isDeleted: false,
//     label: 'Kitchen',
//     parent: 11
// }, {
//     id: 9,
//     isDeleted: false,
//     label: 'EVs',
//     parent: 11
// }, {
//     id: 10,
//     isDeleted: false,
//     label: 'Power Generation',
// }, {
//     id: 11,
//     isDeleted: false,
//     label: 'Power Consumed',
// }, {
//     id: 12,
//     isDeleted: false,
//     label: 'Battery'
// }, {
//     id: 13,
//     isDeleted: false,
//     label: 'Room Temperature'
// }, {
//     id: 14,
//     isDeleted: false,
//     label: 'Alarms'
// }, {
//     id: 15,
//     isDeleted: false,
//     label: 'Fire',
//     parent: 14,
// }, {
//     id: 16,
//     isDeleted: false,
//     label: 'Water',
//     parent: 14,
// }, {
//     id: 17,
//     isDeleted: false,
//     label: 'Battery',
//     parent: 14,
// }, {
//     id: 18,
//     isDeleted: false,
//     label: 'Invertor',
//     parent: 14,
// }];

async function initializeDB() {
    mongoose.connect('mongodb://localhost/api-auth', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch(err => console.error(err));


    //initMeasures();
    //initSensorTypes();
    //initUsers();
    initBuildings(buildings);
    //putAssetsOnBuildings();
    //initTelemetry();
}

const addToDb = (entity, entityData, keyProp, entityName, cbInsert) => {
    entity.findOne({ [keyProp]: entityData[0][keyProp] }).then(data => {
        console.log(`${ entityName } has${ !!data ? '' : ' not' } been initialized`);
        if (!data)  {
            // assumed that if one is not found none are in db (all or nothing)
            cbInsert();
            console.log(`Created default ${ entityName }`);
        }
    })
}

// const initBuildings = (entity) => {
//     addToDb(Building, buildings, 'id', 'Buildings', () => {
//         buildings.forEach(item => {
//             Building.create({ ...item, locations: []}).then(dbBuilding => {
//                 initLocations(dbBuilding, item);
//             })
//         })
//     });
// }

const initBuildings = (buildings) => {
    buildings.forEach(element => Building.save(element));cla
}

// const initUsers = (data ) => {
//     const users = [{
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'abc@abc.com',
//         password: 'abc',
//         sites: [1, 2]
//     }, {
//         firstName: 'Glenn',
//         lastName: 'Packer',
//         email: 'g@g.g',
//         password: 'g',
//         isAdmin: true
//     }, {
//         firstName: 'a',
//         lastName: 'a',
//         email: 'a@a.a',
//         password: 'a',
//         isAdmin: true
//     }];

//     addToDb(User, users, 'email', 'Users', () => {
//         users.forEach(item => User.create(item))
//     });
// }

const locations = [
        {
            id: 1,
            name: '1 Barton Buildings',
            assets: [{
                id: 1,
                name: 'circuit 1',
                description: 'circuit 1',
                sensors: [],
                type: 'type',
                rating: 'rating'
            }]
        }, {
            id: 2,
            name: '2 The Street',
            assets: [{
                id: 1,
                name: 'circuit 1',
                description: 'circuit 1',
                sensors: [],
                type: 'type',
                rating: 'rating'
            },{
                id: 2,
                name: 'circuit 2',
                description: 'circuit 2',
                sensors: [],
                type: 'type 2',
                rating: 'rating 2'
            }]
        }, {
            id: 3,
            name: 'Cottage',
            assets: []
        }, {
            id: 4,
            name: '4 The Lane',
            assets: []
        },{
            id: 5,
            name: '5 The Lane',
            assets: []
        },{
            id: 6,
            name: '6 The Lane',
            assets: []
        },{
            id: 7,
            name: '7 The Lane',
            assets: []
        },
    ];

const initLocations = (dbBuilding, building) => {
    dbBuilding.locations = [];

    const filteredLocations = locations.filter(r => building.locations.includes(r.id));
    Location.insertMany(filteredLocations).then(dbLocations => {
        dbBuilding.locations = dbLocations.map(b => b.id);
        dbBuilding.save();
    })
}

// const initBuildings = (dbSite, site) => {
//     dbSite.buildings = [];

//     const filteredBuildings = buildings.filter(r => site.buildings.includes(r.id));
//     Building.insertMany(filteredBuildings).then(dbBuildings => {
//         dbSite.buildings = dbBuildings.map(b => b.id);
//         dbSite.save();
//     })
// }

// const putAssetsOnBuildings = () => {
//     Building.find({}).then(buildings => {
//         buildings.forEach((build, bi) => {
//             build.assets = sensorTypes.map((s, i) => {
//                 return {
//                     isDeleted : false,
//                     description : `an asset for a ${ s.label } sensor`,
//                     id : i,
//                     name : `${ s.label } Asset`,
//                     type : s.id,
//                     sensors : [
//                         {
//                             description:`${ s.label } sensor`,
//                             id : s.id,
//                             name : `${ s.label } sensor`,
//                             type : `${ s.id }`,
//                             boundId : `${ bi }${ s.id}`,
//                             measure : 2
//                         }
//                     ]
//                 }
//             });
//             build.save();
//         });
//     })
// }

// const initMeasures = () => {
//     Measures.deleteMany({}).then(()=> {
//         const measures = [{
//             id: 1,
//             isDeleted: false,
//             label: 'kwh'
//         }, {
//             id: 2,
//             isDeleted: false,
//             label: 'C'
//         }, {
//             id: 3,
//             isDeleted: false,
//             label: 'W'
//         }]

//         Measures.insertMany(measures)
//     })
// }

// const initSensorTypes = () => {
//     SensorTypes.deleteMany({}).then(()=> {
//         SensorTypes.insertMany(sensorTypes)
//     })
// }

// const initTelemetry = () => {
//     Telemetry.deleteMany({}).then(()=> {
//         let telemetry = [];
//         buildings.forEach((b, i) => {
//             for (let index = 0; index < 400; index++) {
//                 const start = new Date(new Date().getTime() - (30 * 60 * 1000 * index));

//                 telemetry = [...telemetry, ...sensorTypes.map(s => {
//                     if (s.id > 14 && s.id < 20) return { sensorId: `${ i }${ s.id }`, dateTime: start, value: Math.floor(Math.random() * 2) }
//                     return { sensorId: `${ i }${ s.id }`, dateTime: start, value: (Math.random() * 32) }
//                 })]

//                 telemetry.push({ sensorId: `${ i }99`, dateTime: start, value: Math.floor(Math.random() * 2) })
//             }
//         });

//         Telemetry.insertMany(telemetry);
//     })
// }

initializeDB();


