const exportedObject1 = {
	name: "TheName",
	get getName1() { return this.name },
	getName2(){ return this.name },
	logName : function(){ console.log("Exported object1 name: " + this.name) }
};

const exportedFunction1 = () => { console.log("Exported function1"); }

const exportedFunction2 = () => { console.log("Exported function2"); }

/*
export default exportedObject1;
export default exportedFunction1;
export default exportedFunction2;
*/
/*
exports.eo1 = exportedObject1;
exports.ef1 = exportedFunction1;
exports.ef2 = exportedFunction2;
*/
module.exports = {eo1 : exportedObject1, ef1 : exportedFunction1, ef2 : exportedFunction2}