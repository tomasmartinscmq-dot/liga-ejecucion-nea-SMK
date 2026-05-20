// ============================================================
//  LIGA DE EJECUCIÓN SMK NEA — Config del formulario
//  Editá este archivo para actualizar variables, repositores
//  y PDVs sin tocar el formulario principal.
//  Luego subí solo este archivo a GitHub.
// ============================================================

var FORM_CONFIG = {

  // ── REPOSITORES ────────────────────────────────────────────
  repositores: [
    'AGUSTIN CARDOZO',
    'FRANCISCO FLORES',
    'FABIO CARDOZO',
    'CRISTIAN BERZZOTTI',
    'ELIAS RAMIREZ',
    'ALFREDO DUBREZ',
    'LEONEL RUVEDA',
    'DANIEL NORMANDIN',
    'JAVIER ROMERO',
    'JORGE VIGNOLO',
    'NICOLAS VIEYRA',
    'MARTIN VALENZUELA',
    'FRANCISCO GONZALEZ',
    'JUAN QUETGLAS',
    'FRANCISCO CARDOZO',
    'MATIAS MAIDANA',
    'VICTOR MACHUCA',
    'JONATHAN MOREIRA',
    'MATIAS SOLIS',
    'LISANDRO ENCINA',
    'MAXIMILIANO ROMERO',
    'PABLO CABELLO',
    'MATI ROJAS (RC)',
    'ALE FRID (SPV)',
    'EQUIPO TRADE'
  ],

  // ── PDVs DE LA PI ──────────────────────────────────────────
  pdvs: {
    '316727': { bandera: 'HIPER CHANGOMAS', tipo: 'hiper', ciudad: 'RESISTENCIA' },
    '175323': { bandera: 'CARREFOUR HIPER', tipo: 'hiper', ciudad: 'FORMOSA' },
    '47908':  { bandera: 'CARREFOUR HIPER', tipo: 'hiper', ciudad: 'CORRIENTES' },
    '47930':  { bandera: 'LIBERTAD',        tipo: 'super', ciudad: 'POSADAS' },
    '311365': { bandera: 'CHANGOMAS',       tipo: 'super', ciudad: 'POSADAS' },
    '342581': { bandera: 'CHANGOMAS',       tipo: 'super', ciudad: 'POSADAS' },
    '162275': { bandera: 'CARREFOUR HIPER', tipo: 'hiper', ciudad: 'RESISTENCIA' },
    '469400': { bandera: 'CARREFOUR MAXI',  tipo: 'hiper', ciudad: 'RESISTENCIA' },
    '321172': { bandera: 'CHANGOMAS',       tipo: 'super', ciudad: 'GOYA' },
    '162273': { bandera: 'HIPER CHANGOMAS', tipo: 'hiper', ciudad: 'CORRIENTES' },
    '416570': { bandera: 'VEA',             tipo: 'super', ciudad: 'CHACO' },
    '557303': { bandera: 'LA ANONIMA',      tipo: 'super', ciudad: 'CHACO' }
  },

  // ── VARIABLES ──────────────────────────────────────────────
  variables: [
    {
      key: 'gameplan',
      label: 'Focos de Game Plan CZA',
      pts: 5,
      tipo: 'multi',
      minHiper: 2,
      minSuper: 1,
      noneValue: 'Ninguno',
      opciones: [
        'Quilmes Mundial',
        'Stella Pure Gold',
        'Michelob Ultra',
        'Stella 710ml no retornable'
      ],
      infoBox: 'Mínimo requerido:\n🏪 Hipermercado: 2 focos · 🛒 Supermercado: 1 foco'
    },
    {
      key: 'comerciales',
      label: 'Focos Comerciales',
      pts: 5,
      tipo: 'multi',
      minHiper: 3,
      minSuper: 2,
      noneValue: 'Ninguno',
      opciones: [
        'Latones',
        'Above Core',
        'Balanced Choices',
        'Litro Core Value o Brahma 354'
      ],
      infoBox: 'Mínimo requerido:\n🏪 Hipermercado: 3 focos · 🛒 Supermercado: 2 focos'
    },
    {
      key: 'facingcza',
      label: 'Facing Share CZA',
      pts: 25,
      tipo: 'sino',
      infoBox: null
    },
    {
      key: 'planograma',
      label: 'Planograma CZA',
      pts: 15,
      tipo: 'sino',
      infoBox: null
    },
    {
      key: 'nabs',
      label: 'Facing Share NABS',
      pts: 15,
      tipo: 'sino',
      infoBox: '🥤 Pepsi: mínimo 25% del FS de gaseosas\n⚡ Gatorade: mínimo 60% del FS de isotónicas'
    },
    {
      key: 'cero',
      label: 'Bloque Categoría 0.0%',
      pts: 5,
      tipo: 'sino',
      infoBox: 'Marcas: Stella 0.0% · Corona 0.0% · Quilmes 0.0%\nMínimo 2 estantes ejecutados'
    },
    {
      key: 'fsadic',
      label: 'Facing Share Adicionales CZA',
      pts: 5,
      tipo: 'sino',
      infoBox: 'Estantería, mostrador o bajo cooler'
    },
    {
      key: 'ocasion',
      label: 'Ocasión CZA',
      pts: 5,
      tipo: 'multi',
      minHiper: 1,
      minSuper: 1,
      noneValue: 'Ninguna',
      opciones: [
        'Carnicería',
        'Fiambrería/Importados',
        'Snacks',
        'Comidas preparadas',
        'Otros Alcoholes',
        'Sin Gluten',
        'Congelados',
        'Saludables'
      ],
      infoBox: '1 o más ocasiones = cumple'
    },
    {
      key: 'nabsadic',
      label: 'Ejecución Adicional NABS',
      pts: 5,
      tipo: 'multi',
      minHiper: 1,
      minSuper: 1,
      noneValue: 'Ninguno',
      opciones: [
        'Gaseosas Single Serve',
        'Gatorade'
      ],
      infoBox: null
    },
    {
      key: 'pasillo',
      label: 'Adicional Pasillo Central CZA',
      pts: 5,
      tipo: 'multi',
      minHiper: 1,
      minSuper: 1,
      noneValue: 'Ninguno',
      opciones: [
        'Premium',
        'Super Premium',
        'Michelob',
        'Otros CZA'
      ],
      infoBox: 'Priorizar Premium, Super Premium y Michelob'
    },
    {
      key: 'arribo',
      label: 'Adicional Zona de Arribo CZA',
      pts: 5,
      tipo: 'multi',
      minHiper: 1,
      minSuper: 1,
      noneValue: 'Ninguno',
      opciones: [
        'Premium',
        'Super Premium',
        'Michelob',
        'Otros CZA'
      ],
      infoBox: 'Priorizar Premium, Super Premium y Michelob'
    },
    {
      key: 'edf',
      label: 'Planograma EDF SMK',
      pts: 5,
      tipo: 'sino',
      infoBox: 'Validar con CZA y NABS. Sin EDF de marca: validar con CZA del mismo segmento.'
    }
  ],

  // ── UMBRALES DE SCORE ──────────────────────────────────────
  umbrales: {
    alto: 75,
    medio: 50
  },

  // ── CONEXIÓN ───────────────────────────────────────────────
  sheetId: '1R6lsUEsHytU9ClEKKQYSJzi85GuNPqRMoGVdICVUcJY',
  scriptUrl: 'https://script.google.com/macros/s/AKfycbzU9-jen5CO0Fk8NzNSmhj37donu8Rvw0KcTIwNTMyXVK8r9ZGQUUnag9xF8UM92veY8w/exec'

};
