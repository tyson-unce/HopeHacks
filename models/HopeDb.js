const mongoose = require('mongoose');

//making our mongoose schema, sets the outline for entering all data
const hopeHacksSchema = mongoose.Schema({
year: Number,
co2: Number,
co2_per_capita: Number,
cement_co2: Number,
cement_co2_per_capita: Number,
coal_co2: Number,
coal_co2_per_capita: Number,
flaring_co2: Number,
flaring_co2_per_capita: Number,
gas_co2: Number,
gas_co2_per_capita: Number,
oil_co2: Number,
oil_co2_per_capita: Number,
other_industry_co2: Number,
other_co2_per_capita: Number,
co2_growth_prct: Number,
co2_growth_abs: Number,
co2_per_unit_energy: Number,
cumulative_co2: Number,
cumulative_cement_co2: Number,
cumulative_coal_co2: Number,
cumulative_flaring_co2: Number,
cumulative_gas_co2: Number,
cumulative_oil_co2: Number,
cumulative_other_co2: Number,
share_global_co2: Number,
share_global_cement_co2:Number,
share_global_coal_co2: Number,
share_global_flaring_co2: Number,
share_global_gas_co2: Number,
share_global_oil_co2: Number,
share_global_other_co2: Number,
share_global_cumulative_co2: Number,
share_global_cumulative_cement_co2: Number,
share_global_cumulative_coal_co2: Number,
share_global_cumulative_flaring_co2: Number,
share_global_cumulative_gas_co2: Number,
share_global_cumulative_oil_co2: Number,
share_global_cumulative_other_co2: Number,
population: Number,
primary_energy_consumption: Number,
energy_per_capita:Number,
energy_per_gdp: Number})

module.exports = mongoose.model('hopeHacks', hopeHacksSchema);