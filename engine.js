/**********************************************************************
Version 16: Iron Selling/Breaking/AntiContract
			Coal Selling/Breaking/AntiContract
			Refined Selling/AntiContract
			Steel Selling/AntiContract
			Copper Selling/Breaking/AntiContract
			Refined Cop Selling/Breaking/AntiContract
			Spools selling/Breaking/AntiContract
			Electronic Selling/Breaking/AntiContract
			Oil/AntiContract
			Gas Selling/Breaking
			Plastic Selling/Breaking/AntiContract
			Sand Shifting/AntiContract
			Glass Selling/Breaking
			AC Selling/Breaking
			Lightbulb Selling/Breaking
			Car Selling/Breaking
			Planes/Airports
			
		
			Tabs
				Hidden Divs
				
			Licenses
			Workshop
			Buildings
				ContractShift
			Power
				Powerlines
			
			Gilding
				Refineries
			
			AutoSaving
Author: Psychos Play
Thanks to: Neurofluxation
**********************************************************************/

var Engine = {
	
	Values: {
	
		IronPS: 0,
		RefIronPS: 0,
		MotorPS: 0,
		CarPS: 0,
		PlanePS: 0,
		
		CoalPS: 0,
		SteelPS: 0,
		MechPartPS: 0,
		ACPS: 0,
		ConsPartPS: 0,
		
		CopperPS: 0,
		RefCopperPS: 0,
		SpoolPS: 0,
		ElectronicPS: 0,
		
		OilPS: 0,
		GasPS: 0,
		PlasticPS: 0,
		
		SandPS: 0,
		GlassPS: 0,
		LightbulbPS: 0,
		
		
		
		IronContractIron: 0,
		IronContractMoney: 0,
	
		IRefineryIron: 0,
		RefIronContractRefIron: 0,
		RefIronContractMoney: 0,
	
		MechPartFactSteel: 0,
		MechPartContractMechPart: 0,
		MechPartContractMoney: 0,
	
		MotorFactRefIron: 0,
		MotorContractMotor: 0,
		MotorContractMoney: 0,
	
		CarFactMotor: 0,
		CarFactMechPart: 0,
		CarFactGlass: 0,
		CarContractCar: 0,
		CarContractMoney: 0,
		
	
		CoalContractCoal: 0,
		CoalContractMoney: 0,
	
		SRefineryIron: 0,
		SRefineryCoal: 0,
		SteelContractSteel: 0,
		SteelContractMoney: 0,
	
		ConsPartFactSteel: 0,
		ConsPartContractConsPart: 0,
		CustartContractMoney: 0,
	
		ACFactoryConsPart: 0,
		ACFactoryMotor: 0,
		ACFactorySpool: 0,
		ACContractAC: 0,
		ACContractMoney: 0,
		
	
		CopperContractCopper: 0,
		CopperContractMoney: 0,
	
		CRefineryCopper: 0,
		RefCopperContractRefCopper: 0,
		RefCopperContractMoney: 0,
	
		SpoolerRefCopper: 0,
		SpoolContractSpool: 0,
		SpoolContractMoney: 0,
	
		ElecFactSpool: 0,
		ElecFactPlastic: 0,
		ElecContractElec: 0,
		ElecContractMoney: 0,
		
	
		OilContractOil: 0,
		OilContractMoney: 0,
	
		GRefineryOil: 0,
		GasContractGas: 0,
		GasContractMoney: 0,
	
		PRefineryOil: 0,
		PlasticContractPlastic: 0,
		PlasticContractMoney: 0,
		
	
		GlassFurnaceSand: 0,
		
		GlassContractGlass: 0,
		GlassContractMoney: 0,
	
		LightbulbFactSpool: 0,
		LightbulbFactGlass: 0,
		LightbulbContractLightbulb: 0,
		LightbulbContractMoney: 0,
		
		MWhMoney: 0,
		
		GoldCoinGain: 0,
		
		
		MoneyPS: 0
	
	},
			
	Clickables: {
		BuyIronMine: null,
		BuyIronContract: null,
		BreakIronContract: null,
		UpgradeIronMine: null,
		
		BuyIRefinery: null,
		BuyRefIronContract: null,
		BreakRefIronContract: null,
		
		BuyMechPartFact: null,
		BuyMechPartContract: null,
		BreakMechPartContract: null,
		
		BuyMotorFact: null,
		BuyMotorContract: null,
		BreakMotorContract: null,
		
		
		BuyCoalMine: null,
		BuyCoalContract: null,
		BreakCoalContract: null,
		UpgradeCoalMine: null,
		
		BuySRefinery: null,
		BuySteelContract: null,
		BreakSteelContract: null,
		
		BuyConsPartFact: null,
		BuyConsPartContract: null,
		BreakConsPartContract: null,
		
		BuyACFact: null,
		BuyACContract: null,
		BreakACContract: null,
		
		
		BuyCopperMine: null,
		BuyCopperContract: null,
		BreakCopperContract: null,
		UpgradeCopperMine: null,
		
		BuyCRefinery: null,
		BuyRefCopperContract: null,
		BreakRefCopperContract: null,
		
		BuySpooler: null,
		BuySpoolContract: null,
		BreakSpoolContract: null,
		
		BuyElecFact: null,
		BuyElecContract: null,
		BreakElecContract: null,
		
		
		BuyOilMine: null,
		BuyOilContract: null,
		BreakOilContract: null,
		
		BuyGRefinery: null,
		BuyGasContract: null,
		BreakGasContract: null,
		
		BuyPRefinery: null,
		BuyPlasticContract: null,
		BreakPlasticContract: null,
		
		
		BuyShifter: null,
		BuyGlassFurnace: null,
		GlassFurnaceSand: null,
		GlassContractGlass: null,
		GlassContractMoney: null,
		
		BuyLightbulbFact: null,
		BuyLightbulbContract: null,
		BreakLightbulbContract: null,
		
		
		BuildDrill: null,
		
		
		Retire: null,
		UnlockCoal: null,
		UnlockCopper: null,
		UnlockOil: null,
		UnlockGlass: null,
		UnlockPower: null,
		
		
		Save: null,
		Load: null,
		Delete: null,
		DeleteFull: null,
		
	},	
	Display: {
		Status: null,
		TillAutoSave: null,
		
		//Buy
		BuyIronMine: null,
		BuyIronContract: null,
		
		BuyCoalMine: null,
		BuyCoalContract: null,
		
		Money: null,
		Iron: null,
		Coal: null,
		RefIron: null,
		
		//Iron
		IronMine: null,
		IronMineCost: null,
		IronDrill: null,
		IronContract: null,
		IronContractCost: null,
		
		//Refined Iron
		IRefinery: null,
		IRefineryCost: null,
		IRefineryIron: null,
		RefIronContract: null,
		RefIronContractCost: null,
		
		//Mechanical Part
		MechPartFact: null,
		MechPartFactCost: null,
		MechPartFactSteel: null,
		MechPartContract: null,
		MechPartContractCost: null,
		
		//Motor
		MotorFact: null,
		MotorFactCost: null,
		MotorFactRefIron: null,
		MotorContract: null,
		MotorContractCost: null,
		
		
		//Coal
		CoalMine: null,
		CoalMineCost: null,
		CoalDrill: null,
		CoalDrillMechCost: null,
		CoalDrillMotorCost: null,
		CoalContract: null,
		CoalContractCost: null,
		
		//Steel
		SRefinery: null,
		SRefineryCost: null,
		SteelContract: null,
		SteelContractCost: null,
		
		//Construction Part
		ConsPartFact: null,
		ConsPartFactCost: null,
		ConsPartFactSteel: null,
		ConsPartContract: null,
		ConsPartContractCost: null,
		
		//AC Unit
		ACFact: null,
		ACFactCost: null,
		ACFactMechPart: null,
		ACFactMotor: null,
		ACFactSpool: null,
		ACContract: null,
		ACContractCost: null,
		
		
		//Copper
		CopperMine: null,
		CopperMineCost: null,
		CopperDrill: null,
		CopperDrillMechCost: null,
		CopperDrillMotorCost: null,
		CopperContract: null,
		CopperContractCost: null,
		
		//Refined Copper
		CRefinery: null,
		CRefineryCost: null,
		CRefineryCopper: null,
		RefCopperContract: null,
		RefCopperContractCost: null,
		
		//Spools
		Spooler: null,
		SpoolerCost: null,
		SpoolerRefCopper: null,
		SpoolContract: null,
		SpoolContractCost: null,
		
		//Elecs
		ElecFact: null,
		ElecFactCost: null,
		ElecFactSpool: null,
		ElecFactPlastic: null,
		ElecContract: null,
		ElecContractCost: null,
		
		
		//Oil
		OilMine: null,
		OilMineCost: null,
		OilContract: null,
		OilContractCost: null,
		
		//Refined Copper
		GRefinery: null,
		GRefineryCost: null,
		GRefineryOil: null,
		GasContract: null,
		GasContractCost: null,
		
		//Refined Copper
		PRefinery: null,
		PRefineryCost: null,
		PRefineryOil: null,
		PlasticContract: null,
		PlasticContractCost: null,
		
		
		//Shifter
		Shifter: null,
		GlassFurnace: null,
		GlassFurnaceSand: null,
		GlassContractGlass: null,
		GlassContractMoney: null,
		
		//Lightbulbs
		LightbulbFact: null,
		LightbulbFactCost: null,
		LightbulbFactSpool: null,
		LightbulbFactGlass: null,
		LightbulbContract: null,
		LightbulbContractCost: null,
		
		//Buildbales		
		DrillMechCost: null,
		DrillMotorCost: null,
	
	
		// Values
		IronPS: null,
		IronContractIron: null,
		IronContractMoney: null
	},
	Player: {
		Money: 150,
		ContractShift: 0,
		GoldCoin: 0,
		
		//Iron
		Iron: 0,
		IronMine: 0,
		IronDrill: 0,
		IronContract: 0,
		IronAntiContract: 0,
		IronContractMoney: 0,
		
		IronMineCost: 100,
		IronContractCost: 50,
		
		//Refined Iron
		RefIron: 0,
		IRefinery: 0,
		CombIRefinery: 0,
		RefIronContract: 0,
		RefIronAntiContract: 0,
		RefIronContractMoney: 0,
		
		IRefineryCost: 2000,
		RefIronContractCost: 500,
		
		//Motor
		Motor: 0,
		MotorFact: 0,
		MotorFactArm: 0,
		MotorContract: 0,
		MotorAntiContract: 0,
		MotorContractMoney: 0,
		
		MotorFactCost: 30000,
		MotorContractCost: 25,
		
		//Car
		Car: 0,
		CarFact: 0,
		CarFactArm: 0,
		CarContract: 0,
		CarAntiContract: 0,
		CarContractMoney: 0,
		
		CarFactCost: 200000,
		CarContractCost: 2000,
		
		//Plane
		Plane: 0,
		PlaneFact: 0,
		PlaneContract: 0,
		
		PlaneFactCost: 700000,
		
		
		//Coal
		Coal: 0,
		CoalMine: 0,
		CoalDrill: 0,
		CoalContract: 0,
		CoalAntiContract: 0,
		CoalContractMoney: 0,
		
		CoalMineCost: 100,
		CoalContractCost: 30,
		
		//Steel
		Steel: 0,
		SRefinery: 0,
		CombSRefinery: 0,
		SteelContract: 0,
		SteelAntiContract: 0,
		SteelContractMoney: 0,
		
		SRefineryCost: 1500,
		SteelContractCost: 250,
		
		//Mech Part
		MechPart: 0,
		MechPartFact: 0,
		MechPartFactArm: 0,
		MechPartContract: 0,
		MechPartAntiContract: 0,
		
		MechPartFactCost: 25000,
		MechPartContractCost: 900,
		
		//AC Unit
		AC: 0,
		ACFact: 0,
		ACFactArm: 0,
		ACContract: 0,
		ACAntiContract: 0,
		ACContractMoney: 0,
		
		ACFactCost: 100000,
		ACContractCost: 50,
		
		
		//Construction Part
		ConsPart: 0,
		ConsPartFact: 0,
		ConsPartContract: 0,
		ConsPartAntiContract: 0,
		
		ConsPartFactCost: 1000000,
		
		
		//Copper
		Copper: 0,
		CopperMine: 0,
		CopperDrill: 0,
		CopperContract: 0,
		CopperAntiContract: 0,
		CopperContractMoney: 0,
		
		CopperMineCost: 150,
		CopperContractCost: 30,
		
		//Refined Copper
		RefCopper: 0,
		CRefinery: 0,
		CombCRefinery: 0,
		RefCopperContract: 0,
		RefCopperAntiContract: 0,
		RefCopperContractMoney: 0,
		
		CRefineryCost: 3000,
		RefCopperContractCost: 100,
		
		//Spools
		Spool: 0,
		Spooler: 0,
		SpoolerArm: 0,
		SpoolContract: 0,
		SpoolAntiContract: 0,
		SpoolContractMoney: 0,
		
		SpoolerCost: 50000,
		SpoolContractCost: 500,
		
		//Electronic
		Electronic: 0,
		ElecFact: 0,
		ElecFactArm: 0,
		ElecContract: 0,
		ElecAntiContract: 0,
		ElecContractMoney: 0,
		
		ElecFactCost: 350000,
		ElecContractCost: 1750,
		
		
		//Oil
		Oil: 0,
		OilMine: 0,
		OilAntiContract: 0,
		
		OilMineCost: 500,
		OilContractCost: 30,
		
		//Gas
		Gas: 0,
		GRefinery: 0,
		GasContract: 0,
		GasAntiContract: 0,
		GasContractMoney: 0,
		
		GRefineryCost: 300,
		GasContractCost: 10,
		
		//Plastic
		Plastic: 0,
		PRefinery: 0,
		PlasticContract: 0,
		PlasticAntiContract: 0,
		PlasticContractMoney: 0,
		
		PRefineryCost: 300,
		PlasticContractCost: 15,
		
		
		//Sand
		Sand: 0,
		Shifter: 0,
		SandAntiContract: 0,
		
		ShifterMotorCost: 3,
		ShifterMechCost: 25,
		
		//Glass
		GlassFurnace: 0,
		Glass: 0,
		GlassContract: 0,
		GlassAntiContract: 0,
		GlassContractMoney: 0,
		
		GlassContractCost: 2500,
		
		//Glass
		LightbulbFact: 0,
		LightbulbFactArm: 0,
		Lightbulb: 0,
		LightbulbContract: 0,
		LightbulbAntiContract: 0,
		LightbulbContractMoney: 0,
		
		LightbulbFactCost: 150000,
		LightbulbContractCost: 4500,
		
		
		//Drill
		Drill: 0,
		
		DrillMotorCost: 5,
		DrillMechCost: 35,
		
		
		//Furnace
		Furnace: 0,
		
		FurnaceCost: 150,
		
		//Arms
		Arm: 0,
		
		ArmMotorCost: 5,
		ArmMechCost: 35,
		ArmElecCost: 50,
		
		
		//Array		
		SolarArray: 0,
		SolarArrayElecCost: 10,
		SolarArrayGlassCost: 100,
		
		
		//Power
		MWh: 0,
		MWhCost: 8,
		
		PowerLine: 0,
		PowerLineCost: 1000,
		
		CoalPlant: 0,
		CoalPlantCost: 50000,
		
		SolarPlant: 0,
		SolarPlantCost: 3,
		
		NuclearPlant: 0,
		NuclearPlantCost: 750000,
		UraniumCost: 100,
		
		
		
		// Buildings:
		Land: 0,
		LandCost: 500,
		
		Workshop: 0,
		WorkshopCost: 10000,
		
		Apartment: 0,
		ApartmentCost: 10000,
		
		Office: 0,
		OfficeCost: 10000,
		
		
		// Cars
		RawCarPS: 0,
		
		Dealership: 0,
		DealershipCost: 350000,
		
		Road: 0,
		SolarRoad: 0,
		SolarRoadCost: 5,
		
		RawRoad: 0,
		DealerShift: 0,
		
		
		// Planes
		Airport: 0,
		AirportMoneyBase: 500,
		AirportMoney: 500,
		PlaneLimit: 0,
		
		Hanger: 0,
		HangerCost: 50000,
		
		Terminal: 0,
		TerminalCost: 85000,
		
		GiftShop: 0,
		GiftShopCost: 115000,
		
		
		ThirtySecondCounter: 0,
		
		
		
		// Construction
		Permit: 0,
		PermitCost: 10000,
		Warehouse: 0,
		Skyscraper: 0,
		
		Building: 0,
		
		BuildTime: 0,
		WarehouseBuildTimeBase: 120,
		WarehouseBuildTime: 120,
		SkyscraperBuildTimeBase: 1200,
		SkyscraperBuildTime: 1200,
		
		WarehouseConsPartCost: 500,
		WarehouseSpoolCost: 50,
		WarehouseGlassCost: 500,
		WarehouseACCost: 10,
		WarehouseLightbulbCost: 250,
		
		SkyscraperConsPartCost: 5000,
		SkyscraperSpoolCost: 300,
		SkyscraperGlassCost: 10000,
		SkyscraperACCost: 200,
		SkyscraperLightbulbCost: 4000,
		
		
		Generations: 0,
		GenPoints: 0,
		GenCost: 1000,
		GenCoal: 0,
		GenCopper: 0,
		GenOil: 0,
		GenGlass: 0,
		GenPower: 0,
		GenBuilding: 1,
		
		
		//Gold Coin Stuff
		GildedIronMine: 0,
		GildedIronMineCost: 4,
				GildedIRefinery: 0,
				GildedIRefineryCost: 20,
		
		GildedCoalMine: 0,
		GildedCoalMineCost: 4,
				GildedSRefinery: 0,
				GildedSRefineryCost: 20,
		
		GildedCopperMine: 0,
		GildedCopperMineCost: 4,
				GildedCRefinery: 0,
				GildedCRefineryCost: 20,
		
		GildedOilWell: 0,
		GildedOilWellCost: 6,
				GildedGRefinery: 0,
				GildedGRefineryCost: 15,
				GildedPRefinery: 0,
				GildedPRefineryCost: 15,
		
		
		GildedLicense: 0,
		
		GildedEngineer: 0,
		GildedEngineerCost: 10,
		
		GildedForeman: 0,
		GildedForemanCost: 15,
		
		//CRIME!!!!
		Weed: 0,
		WeedPlant: 0,
		WeedPlantCost: 100,
		
		WeedDealer: 0,
		WeedDealerCost: 1000,
		
		
		
		Inventory: []
	},
	
	TimeThen: new Date().getTime(),
	TimeNow: new Date().getTime(),
	Ticks: 0,
	IdleSpeed: 1000,
	AutoSave: 0,
	TillAutoSave: 0,
	TwoSecondCounter: 0,

	// A new alert function for status updates
	// We've included "text" so we can pass a string
	// of text into the Engine.Status function
	Status: function(text) {
		
		// We just change the text of the status area
		// to be the pulled in "text" variable.
		Engine.Clickables.Status.innerHTML = text;
		
		// After 3 seconds, wipe the Status message
		// the setTimeout means that everything inside will wait
		// until the specified milli-seconds (in this case 3000)
		setTimeout(function() {
			
			// Remove the text from the status area
			Engine.Clickables.Status.innerHTML = "";
			
		}, 3000);
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	// BuyingButtons
	
	/*
	----------
	Iron
	----------
	*/
	
	
	BuyAIronMine: function() {
	
		if (Engine.Player.Money >= Engine.Player.IronMineCost) {
			Engine.Player.Money -= Engine.Player.IronMineCost;
			Engine.Player.IronMine++;
			Engine.Player.IronMineCost = Math.ceil(Engine.Player.IronMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.IronMine.innerHTML = Engine.Player.IronMine;
			Engine.Status("Iron Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
		
	},
	
	
	UpgradeAIronMine: function() {
	
		if (Engine.Player.Drill >= 1) {
			if (Engine.Player.IronMine >= 1) {
				Engine.Player.IronMine--;
				Engine.Player.Drill--;
				Engine.Player.IronDrill++;
			
				Engine.Display.Drill.innerHTML = Engine.Player.Drill;
				Engine.Display.IronMine.innerHTML = Engine.Player.IronMine;
				Engine.Display.IronDrill.innerHTML = Engine.Player.IronDrill;
				Engine.Status("Iron Mine Upgraded!");
			} else {
				Engine.Status("No Iron Mines to Upgrade.");
			}
		} else {
				Engine.Status("You need to build a drill!");
		}
		
	},
	
	BuyAIronContract: function() {
	
		if (Engine.Player.Iron >= Engine.Player.IronContractCost) {
			Engine.Player.Iron -= Engine.Player.IronContractCost;
			Engine.Player.IronContract++;
			Engine.Player.IronContractCost = Math.ceil(Engine.Player.IronContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.IronContract.innerHTML = Engine.Player.IronContract;
			Engine.Status("Iron Contract Started!");
		} else {
			Engine.Status("Not enough Iron!");
		}
		
	},
	
	BreakAIronContract: function() {
	
		if (Engine.Player.IronContract >= 1) {
			Engine.Player.IronContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.IronContract.innerHTML = Engine.Player.IronContract;
			Engine.Status("Iron Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyAIRefinery: function() {
	
		if (Engine.Player.Money >= Engine.Player.IRefineryCost) {
			Engine.Player.Money -= Engine.Player.IRefineryCost;
			Engine.Player.IRefinery++;
			Engine.Player.IRefineryCost = Math.ceil(Engine.Player.IRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.IRefinery.innerHTML = Engine.Player.IRefinery;
			Engine.Status("Iron Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
		
	},
	
	
	UpgradeAIRefinery: function() {
	
		if (Engine.Player.Furnace >= 1) {
			if (Engine.Player.IRefinery >= 1) {
				Engine.Player.Furnace--;
				Engine.Player.IRefinery--;
				Engine.Player.CombIRefinery++;
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.IRefinery.innerHTML = Engine.Player.IRefinery;
				Engine.Display.CombIRefinery.innerHTML = Engine.Player.CombIRefinery;
				Engine.Status("Combined Iron Refinery Built!");
			} else {
				Engine.Status("No refinery to upgrade!");
			}
		} else {
			Engine.Status("Need to build a furnace!");
		}
		
	},
	
	BuyARefIronContract: function() {
	
		if (Engine.Player.RefIron >= Engine.Player.RefIronContractCost) {
			Engine.Player.RefIron -= Engine.Player.RefIronContractCost;
			Engine.Player.RefIronContract++;
			Engine.Player.RefIronContractCost = Math.ceil(Engine.Player.RefIronContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.RefIronContract.innerHTML = Engine.Player.RefIronContract;
			Engine.Status("Refined Iron Contract Started!");
		} else {
			Engine.Status("Not enough Refined Iron!");
		}
		
	},
	
	BreakARefIronContract: function() {
	
		if (Engine.Player.RefIronContract >= 1) {
			Engine.Player.RefIronContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.RefIronContract.innerHTML = Engine.Player.RefIronContract;
			Engine.Status("Refined Iron Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyAMotorFact: function() {
	
		if (Engine.Player.Money >= Engine.Player.MotorFactCost) {
			Engine.Player.Money -= Engine.Player.MotorFactCost;
			Engine.Player.MotorFact++;
			Engine.Player.MotorFactCost = Math.ceil(Engine.Player.MotorFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MotorFact.innerHTML = Engine.Player.MotorFact;
			Engine.Status("Motor Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
		
	},
	
	BuyAMotorContract: function() {
	
		if (Engine.Player.Motor >= Engine.Player.MotorContractCost) {
			Engine.Player.Motor -= Engine.Player.MotorContractCost;
			Engine.Player.MotorContract++;
			Engine.Player.MotorContractCost = Math.ceil(Engine.Player.MotorContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MotorContract.innerHTML = Engine.Player.MotorContract;
			Engine.Status("Motor Contract Started!");
		} else {
			Engine.Status("Not enough Motors!");
		}
		
	},
	
	BreakAMotorContract: function() {
	
		if (Engine.Player.MotorContract >= 1) {
			Engine.Player.MotorContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MotorContract.innerHTML = Engine.Player.MotorContract;
			Engine.Status("Motor Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeAMotorFact: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.MotorFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.MotorFact--;
				Engine.Player.MotorFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.MotorFact.innerHTML = Engine.Player.MotorFact;
				Engine.Display.MotorFactArm.innerHTML = Engine.Player.MotorFactArm;
				Engine.Status("Automated Motor Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	BuyACarFact: function() {
	
		if (Engine.Player.Money >= Engine.Player.CarFactCost) {
			Engine.Player.Money -= Engine.Player.CarFactCost;
			Engine.Player.CarFact++;
			Engine.Player.CarFactCost = Math.ceil(Engine.Player.CarFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CarFact.innerHTML = Engine.Player.CarFact;
			Engine.Status("Car Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
		
	},
	
	BuyACarContract: function() {
	
		if (Engine.Player.Car >= Engine.Player.CarContractCost) {
			Engine.Player.Car -= Engine.Player.CarContractCost;
			Engine.Player.CarContract++;
			Engine.Player.CarContractCost = Math.ceil(Engine.Player.CarContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CarContract.innerHTML = Engine.Player.CarContract;
			Engine.Status("Car Contract Started!");
		} else {
			Engine.Status("Not enough Cars!");
		}
		
	},
	
	BreakACarContract: function() {
	
		if (Engine.Player.CarContract >= 1) {
			Engine.Player.CarContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CarContract.innerHTML = Engine.Player.CarContract;
			Engine.Status("Car Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeACarFact: function() {
	
		if (Engine.Player.Arm >= 2) {
			if (Engine.Player.CarFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.Arm--;
				Engine.Player.CarFact--;
				Engine.Player.CarFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.CarFact.innerHTML = Engine.Player.CarFact;
				Engine.Display.CarFactArm.innerHTML = Engine.Player.CarFactArm;
				Engine.Status("Automated Car Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build two automated arms!");
		}
		
	},
	
	
	BuyAPlaneFact: function() {
	
	if (Engine.Player.CarFactArm >= 1) {
		if (Engine.Player.Money >= Engine.Player.PlaneFactCost) {
			Engine.Player.Money -= Engine.Player.PlaneFactCost;
			Engine.Player.PlaneFact++;
			Engine.Player.CarFactArm--;
			Engine.Player.PlaneFactCost = Math.ceil(Engine.Player.PlaneFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.PlaneFact.innerHTML = Engine.Player.PlaneFact;
			Engine.Status("Plane Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	} else {
		Engine.Status("Need to have an Automated Car Factory!");
	}
		
	},
	
	/*
	----------
	Coal
	----------
	*/
	
	
	BuyACoalMine: function() {
	
	if (Engine.Player.GenCoal > 0) {
		if (Engine.Player.Money >= Engine.Player.CoalMineCost) {
			Engine.Player.Money -= Engine.Player.CoalMineCost;
			Engine.Player.CoalMine++;
			Engine.Player.CoalMineCost = Math.ceil(Engine.Player.CoalMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CoalMine.innerHTML = Engine.Player.CoalMine;
			Engine.Status("Coal Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
		
	},
	
	
	UpgradeACoalMine: function() {
	
	if (Engine.Player.GenCoal > 0) {
		if (Engine.Player.Drill >= 1) {
			if (Engine.Player.CoalMine >= 1) {
				Engine.Player.CoalMine--;
				Engine.Player.Drill--;
				Engine.Player.CoalDrill++;
			
				Engine.Display.Drill.innerHTML = Engine.Player.Drill;
				Engine.Display.CoalMine.innerHTML = Engine.Player.CoalMine;
				Engine.Display.CoalDrill.innerHTML = Engine.Player.CoalDrill;
				Engine.Status("Coal Mine Upgraded!");
			} else {
				Engine.Status("No Coal Mines to Upgrade.");
			}
		} else {
				Engine.Status("You need to build a drill!");
		}
	}
	},
	
	BuyACoalContract: function() {
	
		if (Engine.Player.Coal >= Engine.Player.CoalContractCost) {
			Engine.Player.Coal -= Engine.Player.CoalContractCost;
			Engine.Player.CoalContract++;
			Engine.Player.CoalContractCost = Math.ceil(Engine.Player.CoalContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CoalContract.innerHTML = Engine.Player.CoalContract;
			Engine.Status("Coal Contract Started!");
		} else {
			Engine.Status("Not enough Coal!");
		}
		
	},
	
	BreakACoalContract: function() {
	
		if (Engine.Player.CoalContract >= 1) {
			Engine.Player.CoalContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CoalContract.innerHTML = Engine.Player.CoalContract;
			Engine.Status("Coal Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyASRefinery: function() {
	
	if (Engine.Player.GenCoal > 0) {
		if (Engine.Player.Money >= Engine.Player.SRefineryCost) {
			Engine.Player.Money -= Engine.Player.SRefineryCost;
			Engine.Player.SRefinery++;
			Engine.Player.SRefineryCost = Math.ceil(Engine.Player.SRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.SRefinery.innerHTML = Engine.Player.SRefinery;
			Engine.Status("Steel Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	
	UpgradeASRefinery: function() {
	
		if (Engine.Player.Furnace >= 1) {
			if (Engine.Player.SRefinery >= 1) {
				Engine.Player.Furnace--;
				Engine.Player.SRefinery--;
				Engine.Player.CombSRefinery++;
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.SRefinery.innerHTML = Engine.Player.SRefinery;
				Engine.Display.CombSRefinery.innerHTML = Engine.Player.CombSRefinery;
				Engine.Status("Combined Steel Refinery Built!");
			} else {
				Engine.Status("No refinery to upgrade!");
			}
		} else {
			Engine.Status("Need to build a furnace!");
		}
		
	},
	
	BuyASteelContract: function() {
	
		if (Engine.Player.Steel >= Engine.Player.SteelContractCost) {
			Engine.Player.Steel -= Engine.Player.SteelContractCost;
			Engine.Player.SteelContract++;
			Engine.Player.SteelContractCost = Math.ceil(Engine.Player.SteelContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.SteelContract.innerHTML = Engine.Player.SteelContract;
			Engine.Status("Steel Contract Started!");
		} else {
			Engine.Status("Not enough Steel!");
		}
		
	},
	
	BreakASteelContract: function() {
	
		if (Engine.Player.SteelContract >= 1) {
			Engine.Player.SteelContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.SteelContract.innerHTML = Engine.Player.SteelContract;
			Engine.Status("Steel Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyAMechPartFact: function() {
	
	if (Engine.Player.GenCoal > 0) {
		if (Engine.Player.Money >= Engine.Player.MechPartFactCost) {
			Engine.Player.Money -= Engine.Player.MechPartFactCost;
			Engine.Player.MechPartFact++;
			Engine.Player.MechPartFactCost = Math.ceil(Engine.Player.MechPartFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MechPartFact.innerHTML = Engine.Player.MechPartFact;
			Engine.Status("Car Part Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyAMechPartContract: function() {
	
		if (Engine.Player.MechPart >= Engine.Player.MechPartContractCost) {
			Engine.Player.MechPart -= Engine.Player.MechPartContractCost;
			Engine.Player.MechPartContract++;
			Engine.Player.MechPartContractCost = Math.ceil(Engine.Player.MechPartContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MechPartContract.innerHTML = Engine.Player.MechPartContract;
			Engine.Status("Car Part Contract Started!");
		} else {
			Engine.Status("Not enough Refined Iron!");
		}
		
	},
	
	BreakAMechPartContract: function() {
	
		if (Engine.Player.MechPartContract >= 1) {
			Engine.Player.MechPartContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MechPartContract.innerHTML = Engine.Player.MechPartContract;
			Engine.Status("Car Part Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeAMechPartFact: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.MechPartFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.MechPartFact--;
				Engine.Player.MechPartFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.MechPartFact.innerHTML = Engine.Player.MechPartFact;
				Engine.Display.MechPartFactArm.innerHTML = Engine.Player.MechPartFactArm;
				Engine.Status("Automated Mechanical Part Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	BuyAACFact: function() {
	
	if (Engine.Player.GenCoal > 0) {
		if (Engine.Player.Money >= Engine.Player.ACFactCost) {
			Engine.Player.Money -= Engine.Player.ACFactCost;
			Engine.Player.ACFact++;
			Engine.Player.ACFactCost = Math.ceil(Engine.Player.ACFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ACFact.innerHTML = Engine.Player.ACFact;
			Engine.Status("AC Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyAACContract: function() {
	
		if (Engine.Player.AC >= Engine.Player.ACContractCost) {
			Engine.Player.AC -= Engine.Player.ACContractCost;
			Engine.Player.ACContract++;
			Engine.Player.ACContractCost = Math.ceil(Engine.Player.ACContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ACContract.innerHTML = Engine.Player.ACContract;
			Engine.Status("AC Contract Started!");
		} else {
			Engine.Status("Not enough ACs!");
		}
		
	},
	
	BreakAACContract: function() {
	
		if (Engine.Player.ACContract >= 1) {
			Engine.Player.ACContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ACContract.innerHTML = Engine.Player.ACContract;
			Engine.Status("AC Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeAACFact: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.ACFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.ACFact--;
				Engine.Player.ACFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.ACFact.innerHTML = Engine.Player.ACFact;
				Engine.Display.ACFactArm.innerHTML = Engine.Player.ACFactArm;
				Engine.Status("Automated A/C Unit Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	BuyAConsPartFact: function() {
	if (Engine.Player.MechPartFactArm >= 1) {
		if (Engine.Player.Money >= Engine.Player.ConsPartFactCost) {
			Engine.Player.Money -= Engine.Player.ConsPartFactCost;
			Engine.Player.ConsPartFact++;
			Engine.Player.MechPartFactArm--;
			Engine.Player.ConsPartFactCost = Math.ceil(Engine.Player.ConsPartFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ConsPartFact.innerHTML = Engine.Player.ConsPartFact;
			Engine.Display.MechPartFactArm.innerHTML = Engine.Player.MechPartFactArm;
			Engine.Status("Construction Part Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	} else {
		Engine.Status("Need to build an Automated Mechanical Part Factory!");
	}
		
	},
	

	
	/*
	------------
	Coppers
	------------
	*/
	
	
	BuyACopperMine: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.CopperMineCost) {
			Engine.Player.Money -= Engine.Player.CopperMineCost;
			Engine.Player.CopperMine++;
			Engine.Player.CopperMineCost = Math.ceil(Engine.Player.CopperMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CopperMine.innerHTML = Engine.Player.CopperMine;
			Engine.Status("Copper Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	
	UpgradeACopperMine: function() {
	
		if (Engine.Player.Drill >= 1) {
			if (Engine.Player.CopperMine >= 1) {
				Engine.Player.CopperMine--;
				Engine.Player.Drill--;
				Engine.Player.CopperDrill++;
			
				Engine.Display.Drill.innerHTML = Engine.Player.Drill;
				Engine.Display.CopperMine.innerHTML = Engine.Player.CopperMine;
				Engine.Display.CopperDrill.innerHTML = Engine.Player.CopperDrill;
				Engine.Status("Copper Mine Upgraded!");
			} else {
				Engine.Status("No Copper Mines to Upgrade.");
			}
		} else {
				Engine.Status("You need to build a drill!");
		}
		
	},
	
	BuyACopperContract: function() {
	
		if (Engine.Player.Copper >= Engine.Player.CopperContractCost) {
			Engine.Player.Copper -= Engine.Player.CopperContractCost;
			Engine.Player.CopperContract++;
			Engine.Player.CopperContractCost = Math.ceil(Engine.Player.CopperContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CopperContract.innerHTML = Engine.Player.CopperContract;
			Engine.Status("Copper Contract Started!");
		} else {
			Engine.Status("Not enough Copper!");
		}
		
	},
	
	BreakACopperContract: function() {
	
		if (Engine.Player.CopperContract >= 1) {
			Engine.Player.CopperContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CopperContract.innerHTML = Engine.Player.CopperContract;
			Engine.Status("Copper Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyACRefinery: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.CRefineryCost) {
			Engine.Player.Money -= Engine.Player.CRefineryCost;
			Engine.Player.CRefinery++;
			Engine.Player.CRefineryCost = Math.ceil(Engine.Player.CRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CRefinery.innerHTML = Engine.Player.CRefinery;
			Engine.Status("Copper Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	
	UpgradeACRefinery: function() {
	
		if (Engine.Player.Furnace >= 1) {
			if (Engine.Player.CRefinery >= 1) {
				Engine.Player.Furnace--;
				Engine.Player.CRefinery--;
				Engine.Player.CombCRefinery++;
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.CRefinery.innerHTML = Engine.Player.CRefinery;
				Engine.Display.CombCRefinery.innerHTML = Engine.Player.CombCRefinery;
				Engine.Status("Combined Copper Refinery Built!");
			} else {
				Engine.Status("No refinery to upgrade!");
			}
		} else {
			Engine.Status("Need to build a furnace!");
		}
		
	},
	
	BuyARefCopperContract: function() {
	
		if (Engine.Player.RefCopper >= Engine.Player.RefCopperContractCost) {
			Engine.Player.RefCopper -= Engine.Player.RefCopperContractCost;
			Engine.Player.RefCopperContract++;
			Engine.Player.RefCopperContractCost = Math.ceil(Engine.Player.RefCopperContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.RefCopperContract.innerHTML = Engine.Player.RefCopperContract;
			Engine.Status("Refined Copper Contract Started!");
		} else {
			Engine.Status("Not enough Refined Copper!");
		}
		
	},
	
	BreakARefCopperContract: function() {
	
		if (Engine.Player.RefCopperContract >= 1) {
			Engine.Player.RefCopperContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.RefCopperContract.innerHTML = Engine.Player.RefCopperContract;
			Engine.Status("RefCopper Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyASpooler: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.SpoolerCost) {
			Engine.Player.Money -= Engine.Player.SpoolerCost;
			Engine.Player.Spooler++;
			Engine.Player.SpoolerCost = Math.ceil(Engine.Player.SpoolerCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.Spooler.innerHTML = Engine.Player.Spooler;
			Engine.Status("Spooler Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyASpoolContract: function() {
	
		if (Engine.Player.Spool >= Engine.Player.SpoolContractCost) {
			Engine.Player.Spool -= Engine.Player.SpoolContractCost;
			Engine.Player.SpoolContract++;
			Engine.Player.SpoolContractCost = Math.ceil(Engine.Player.SpoolContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.SpoolContract.innerHTML = Engine.Player.SpoolContract;
			Engine.Status("Spool Contract Started!");
		} else {
			Engine.Status("Not enough Spools!");
		}
		
	},
	
	BreakASpoolContract: function() {
	
		if (Engine.Player.SpoolContract >= 1) {
			Engine.Player.SpoolContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.SpoolContract.innerHTML = Engine.Player.SpoolContract;
			Engine.Status("Spool Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeASpooler: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.Spooler >= 1) {
				Engine.Player.Arm--;
				Engine.Player.Spooler--;
				Engine.Player.SpoolerArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.Spooler.innerHTML = Engine.Player.Spooler;
				Engine.Display.SpoolerArm.innerHTML = Engine.Player.SpoolerArm;
				Engine.Status("Automated Spooler Built!");
			} else {
				Engine.Status("No spooler to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	BuyAElecFact: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.ElecFactCost) {
			Engine.Player.Money -= Engine.Player.ElecFactCost;
			Engine.Player.ElecFact++;
			Engine.Player.ElecFactCost = Math.ceil(Engine.Player.ElecFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ElecFact.innerHTML = Engine.Player.ElecFact;
			Engine.Status("Electronic Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyAElecContract: function() {
	
		if (Engine.Player.Electronic >= Engine.Player.ElecContractCost) {
			Engine.Player.Electronic -= Engine.Player.ElecContractCost;
			Engine.Player.ElecContract++;
			Engine.Player.ElecContractCost = Math.ceil(Engine.Player.ElecContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ElecContract.innerHTML = Engine.Player.ElecContract;
			Engine.Status("Electronic Contract Started!");
		} else {
			Engine.Status("Not enough Electronics!");
		}
		
	},
	
	BreakAElecContract: function() {
	
		if (Engine.Player.ElecContract >= 1) {
			Engine.Player.ElecContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.ElecContract.innerHTML = Engine.Player.ElecContract;
			Engine.Status("Electronic Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeAElecFact: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.ElecFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.ElecFact--;
				Engine.Player.ElecFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.ElecFact.innerHTML = Engine.Player.ElecFact;
				Engine.Display.ElecFactArm.innerHTML = Engine.Player.ElecFactArm;
				Engine.Status("Automated Electronic Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	/*
	------------
	Oils Button
	------------
	*/
	
		
	BuyAOilMine: function() {
	
	if (Engine.Player.GenOil > 0) {
		if (Engine.Player.Money >= Engine.Player.OilMineCost) {
			Engine.Player.Money -= Engine.Player.OilMineCost;
			Engine.Player.OilMine++;
			Engine.Player.OilMineCost = Math.ceil(Engine.Player.OilMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.OilMine.innerHTML = Engine.Player.OilMine;
			Engine.Status("Oil Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	
	BuyAGRefinery: function() {
	
	if (Engine.Player.GenOil > 0) {
		if (Engine.Player.Money >= Engine.Player.GRefineryCost) {
			Engine.Player.Money -= Engine.Player.GRefineryCost;
			Engine.Player.GRefinery++;
			Engine.Player.GRefineryCost = Math.ceil(Engine.Player.GRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.GRefinery.innerHTML = Engine.Player.GRefinery;
			Engine.Status("Gas Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyAGasContract: function() {
	
		if (Engine.Player.Gas >= Engine.Player.GasContractCost) {
			Engine.Player.Gas -= Engine.Player.GasContractCost;
			Engine.Player.GasContract++;
			Engine.Player.GasContractCost = Math.ceil(Engine.Player.GasContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.GasContract.innerHTML = Engine.Player.GasContract;
			Engine.Status("Gas Contract Started!");
		} else {
			Engine.Status("Not enough Gas!");
		}
		
	},
	
	BreakAGasContract: function() {
	
		if (Engine.Player.GasContract >= 1) {
			Engine.Player.GasContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.GasContract.innerHTML = Engine.Player.GasContract;
			Engine.Status("Gas Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyAPRefinery: function() {
	
	if (Engine.Player.GenOil > 0) {
		if (Engine.Player.Money >= Engine.Player.PRefineryCost) {
			Engine.Player.Money -= Engine.Player.PRefineryCost;
			Engine.Player.PRefinery++;
			Engine.Player.PRefineryCost = Math.ceil(Engine.Player.PRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.PRefinery.innerHTML = Engine.Player.PRefinery;
			Engine.Status("Plastic Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyAPlasticContract: function() {
	
		if (Engine.Player.Plastic >= Engine.Player.PlasticContractCost) {
			Engine.Player.Plastic -= Engine.Player.PlasticContractCost;
			Engine.Player.PlasticContract++;
			Engine.Player.PlasticContractCost = Math.ceil(Engine.Player.PlasticContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.PlasticContract.innerHTML = Engine.Player.PlasticContract;
			Engine.Status("Plastic Contract Started!");
		} else {
			Engine.Status("Not enough Plastic!");
		}
		
	},
	
	BreakAPlasticContract: function() {
	
		if (Engine.Player.PlasticContract >= 1) {
			Engine.Player.PlasticContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.PlasticContract.innerHTML = Engine.Player.PlasticContract;
			Engine.Status("Plastic Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	/*
	------------
	Sands Button
	------------
	*/
	
		
	BuyAShifter: function() {
	
	if (Engine.Player.GenGlass > 0) {
		if (Engine.Player.Motor >= Engine.Player.ShifterMotorCost) {
			if (Engine.Player.MechPart >= Engine.Player.ShifterMechCost) {
				Engine.Player.Motor -= Engine.Player.ShifterMotorCost;
				Engine.Player.MechPart -= Engine.Player.ShifterMechCost;
				Engine.Player.Shifter++;
				Engine.Player.ShifterMotorCost = Math.ceil(Engine.Player.ShifterMotorCost*1.2);
				Engine.Player.ShifterMechCost = Math.ceil(Engine.Player.ShifterMechCost*1.2);
			
				Engine.Display.MechPart.innerHTML = Engine.Player.MechPart;
				Engine.Display.Motor.innerHTML = Engine.Player.Motor;
				Engine.Display.Shifter.innerHTML = Engine.Player.Shifter;
				Engine.Status("Shifter Built!");
			} else {
				Engine.Status("Not enough Mechanical Parts!");
			}
		} else {
			Engine.Status("Not enough Motors!");
		}
	}
	},
	
	
	BuyAGlassFurnace: function() {
	
	if (Engine.Player.GenGlass > 0) {
		if (Engine.Player.Furnace >= 1) {
			Engine.Player.GlassFurnace++;
			Engine.Player.Furnace--;
			
			Engine.Display.Furnace.innerHTML = Engine.Player.Furnace;
			Engine.Display.GlassFurnace.innerHTML = Engine.Player.GlassFurnace;
			Engine.Status("Glass Furnace Allocated!");
		} else {
			Engine.Status("Need to build a Furnace!");
		}
	}
	},
	
	BuyAGlassContract: function() {
	
		if (Engine.Player.Glass >= Engine.Player.GlassContractCost) {
			Engine.Player.Glass -= Engine.Player.GlassContractCost;
			Engine.Player.GlassContract++;
			Engine.Player.GlassContractCost = Math.ceil(Engine.Player.GlassContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.GlassContract.innerHTML = Engine.Player.GlassContract;
			Engine.Status("Glass Contract Started!");
		} else {
			Engine.Status("Not enough Glass!");
		}
		
	},
	
	BreakAGlassContract: function() {
	
		if (Engine.Player.GlassContract >= 1) {
			Engine.Player.GlassContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.GlassContract.innerHTML = Engine.Player.GlassContract;
			Engine.Status("Glass Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyALightbulbFact: function() {
	
	if (Engine.Player.GenGlass > 0) {
		if (Engine.Player.Money >= Engine.Player.LightbulbFactCost) {
			Engine.Player.Money -= Engine.Player.LightbulbFactCost;
			Engine.Player.LightbulbFact++;
			Engine.Player.LightbulbFactCost = Math.ceil(Engine.Player.LightbulbFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.LightbulbFact.innerHTML = Engine.Player.LightbulbFact;
			Engine.Status("Lightbulb Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyALightbulbContract: function() {
	
		if (Engine.Player.Lightbulb >= Engine.Player.LightbulbContractCost) {
			Engine.Player.Lightbulb -= Engine.Player.LightbulbContractCost;
			Engine.Player.LightbulbContract++;
			Engine.Player.LightbulbContractCost = Math.ceil(Engine.Player.LightbulbContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.LightbulbContract.innerHTML = Engine.Player.LightbulbContract;
			Engine.Status("Lightbulb Contract Started!");
		} else {
			Engine.Status("Not enough Lightbulbs!");
		}
		
	},
	
	BreakALightbulbContract: function() {
	
		if (Engine.Player.LightbulbContract >= 1) {
			Engine.Player.LightbulbContract--;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.LightbulbContract.innerHTML = Engine.Player.LightbulbContract;
			Engine.Status("Lightbulb Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	UpgradeALightbulbFact: function() {
	
		if (Engine.Player.Arm >= 1) {
			if (Engine.Player.LightbulbFact >= 1) {
				Engine.Player.Arm--;
				Engine.Player.LightbulbFact--;
				Engine.Player.LightbulbFactArm++;
			
				Engine.Display.Arm.innerHTML = Engine.Player.Arm;
				Engine.Display.LightbulbFact.innerHTML = Engine.Player.LightbulbFact;
				Engine.Display.LightbulbFactArm.innerHTML = Engine.Player.LightbulbFactArm;
				Engine.Status("Automated Lightbulb Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	/*
	======================
	Workshop
	======================
	*/
	
	
	
	BuildADrill: function() {
	
		if (Engine.Player.Workshop > 0) {
			if (Engine.Player.Motor >= Engine.Player.DrillMotorCost) {
				if (Engine.Player.MechPart >= Engine.Player.DrillMechCost) {
					Engine.Player.Motor -= Engine.Player.DrillMotorCost;
					Engine.Player.MechPart -= Engine.Player.DrillMechCost;
					Engine.Player.Drill++;
					Engine.Player.DrillMotorCost = Math.ceil(Engine.Player.DrillMotorCost*1.1);
					Engine.Player.DrillMechCost = Math.ceil(Engine.Player.DrillMechCost*1.1);
			
					Engine.Display.Motor.innerHTML = Engine.Player.Motor;
					Engine.Display.MechPart.innerHTML = Engine.Player.MechPart;
					Engine.Display.Drill.innerHTML = Engine.Player.Drill;
					Engine.Status("Built a Drill!");
				} else {
					Engine.Status("Not enough Mechanical Parts!");
				}
			} else {
					Engine.Status("Not enough Motors!");
			}
		} else {
			Engine.Status("Must Build a Personal Workshop!");
		}
		
	},
	
	BuildAFurnace: function() {
	
		if (Engine.Player.Workshop > 0) {
		if (Engine.Player.RefIron >= Engine.Player.FurnaceCost) {
				Engine.Player.RefIron -= Engine.Player.FurnaceCost;
				Engine.Player.Furnace++;
				Engine.Player.FurnaceCost = Math.ceil(Engine.Player.FurnaceCost*1.1);
			
				Engine.Display.RefIron.innerHTML = Engine.Player.RefIron;
				Engine.Display.Furnace.innerHTML = Engine.Player.Furnace;
				Engine.Status("Built a Furnace!");
		} else {
				Engine.Status("Not enough Refined Iron!");
		}
		} else {
			Engine.Status("Must Build a Personal Workshop!");
		}
		
	},
	
	BuildAArm: function() {
	
		if (Engine.Player.Workshop > 0) {
		if (Engine.Player.Motor >= Engine.Player.ArmMotorCost) {
			if (Engine.Player.MechPart >= Engine.Player.ArmMechCost) {
				if (Engine.Player.Electronic >= Engine.Player.ArmElecCost) {
					Engine.Player.Motor -= Engine.Player.ArmMotorCost;
					Engine.Player.MechPart -= Engine.Player.ArmMechCost;
					Engine.Player.Electronic -= Engine.Player.ArmElecCost;
					Engine.Player.Arm++;
					Engine.Player.ArmMotorCost = Math.ceil(Engine.Player.ArmMotorCost*1.1);
					Engine.Player.ArmMechCost = Math.ceil(Engine.Player.ArmMechCost*1.1);
					Engine.Player.ArmElecCost = Math.ceil(Engine.Player.ArmElecCost*1.1);
			
					Engine.Display.Motor.innerHTML = Engine.Player.Motor;
					Engine.Display.MechPart.innerHTML = Engine.Player.MechPart;
					Engine.Display.Electronic.innerHTML = Engine.Player.Electronic;
					Engine.Display.Arm.innerHTML = Engine.Player.Arm;
					Engine.Status("Built an Automated Arm!");
				} else {
					Engine.Status("Not enough Electronics!");
				}
			} else {
				Engine.Status("Not enough Mechanical Parts!");
			}
		} else {
				Engine.Status("Not enough Motors!");
		}
		} else {
			Engine.Status("Must Build a Personal Workshop!");
		}
		
	},
	
	BuildASolarArray: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.Electronic >= Engine.Player.SolarArrayElecCost) {
			if (Engine.Player.Glass >= Engine.Player.SolarArrayGlassCost) {
				Engine.Player.Electronic -= Engine.Player.SolarArrayElecCost;
				Engine.Player.Glass -= Engine.Player.SolarArrayGlassCost;
				Engine.Player.SolarArray++;
				Engine.Player.SolarArrayElecCost = Math.ceil(Engine.Player.SolarArrayElecCost*1.1);
				Engine.Player.SolarArrayGlassCost = Math.ceil(Engine.Player.SolarArrayGlassCost*1.1);
			
				Engine.Display.SolarArray.innerHTML = Engine.Player.SolarArray;
				Engine.Display.Electronic.innerHTML = Engine.Player.Electronic;
				Engine.Display.Glass.innerHTML = Engine.Player.Glass;
				Engine.Display.SolarArrayElecCost.innerHTML = Engine.Player.SolarArrayElecCost;
				Engine.Display.SolarArrayGlassCost.innerHTML = Engine.Player.SolarArrayGlassCost;
				Engine.Status("Built a Solar Array!");
			} else {
				Engine.Status("Not enough Glass!");
			}
		} else {
				Engine.Status("Not enough Electronics!");
		}
	} else {
			Engine.Status("You need a power license.");
	}
	},
	
	
	/*
	======================
	Power Plants
	======================
	*/
	
	
	BuyAPowerLine: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.Money >= Engine.Player.PowerLineCost) {
			Engine.Player.Money -= Engine.Player.PowerLineCost;
			Engine.Player.PowerLine++;
			Engine.Player.PowerLineCost = Math.ceil(Engine.Player.PowerLineCost*1.1);
			Engine.Player.MWhCost = Math.floor(80*(1+(Math.sqrt(Engine.Player.PowerLine)/7)))/10;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.PowerLine.innerHTML = Engine.Player.PowerLine;
			Engine.Display.PowerLineCost.innerHTML = Engine.Player.PowerLineCost;
			Engine.Display.MWhCost.innerHTML = Engine.Player.MWhCost;
			Engine.Status("Power Lines Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},	
	
	BuyACoalPlant: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.Money >= Engine.Player.CoalPlantCost) {
			if (Engine.Player.Land > 0) {
			Engine.Player.Money -= Engine.Player.CoalPlantCost;
			Engine.Player.CoalPlant++;
			Engine.Player.CoalPlantCost = Math.ceil(Engine.Player.CoalPlantCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.CoalPlant.innerHTML = Engine.Player.CoalPlant;
			
			Engine.Player.Land--;
			Engine.Display.Land.innerHTML = Engine.Player.Land;
				
			Engine.Status("Coal Power Plant Bought!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuildASolarPlant: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.SolarArray >= Engine.Player.SolarPlantCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.SolarArray -= Engine.Player.SolarPlantCost;
				Engine.Player.SolarPlant++;
				Engine.Player.SolarPlantCost = Math.ceil(Engine.Player.SolarPlantCost*1.1);
			
				Engine.Display.SolarPlant.innerHTML = Engine.Player.SolarPlant;
				Engine.Display.SolarPlantCost.innerHTML = Engine.Player.SolarPlantCost;
				Engine.Display.SolarArray.innerHTML = Engine.Player.SolarArray;
				
				Engine.Player.Land--;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				
				Engine.Status("Built a Solar Plant!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
				Engine.Status("Build more Solar Arrays!");
		}
	}
	},
	
	BuyANuclearPlant: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.Money >= Engine.Player.NuclearPlantCost) {
			if (Engine.Player.Land > 0) {
			Engine.Player.Money -= Engine.Player.NuclearPlantCost;
			Engine.Player.NuclearPlant++;
			Engine.Player.NuclearPlantCost = Math.ceil(Engine.Player.NuclearPlantCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.NuclearPlant.innerHTML = Engine.Player.NuclearPlant;
			
			Engine.Player.Land--;
			Engine.Display.Land.innerHTML = Engine.Player.Land;
			
			Engine.Status("Nuclear Power Plant Bought!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	
	/*
	======================
	Buildings
	======================
	*/
	
	
	BuyALand: function() {
	
	if (Engine.Player.GenBuilding > 0) {
		if (Engine.Player.Money >= Engine.Player.LandCost) {
				Engine.Player.Money -= Engine.Player.LandCost;
				Engine.Player.Land++;
				Engine.Player.LandCost = Math.ceil(Engine.Player.LandCost*1.1);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.LandCost.innerHTML = Engine.Player.LandCost;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Land Bought!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	}
	},
	
	BuyAWorkshop: function() {
	
	if (Engine.Player.GenBuilding > 0) {
		if (Engine.Player.Money >= Engine.Player.WorkshopCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.Money -= Engine.Player.WorkshopCost;
				Engine.Player.Workshop++;
				Engine.Player.Land--;
				Engine.Player.WorkshopCost = Math.ceil(Engine.Player.WorkshopCost*1.5);
				Engine.Player.DrillMotorCost = Math.ceil(Engine.Player.DrillMotorCost*0.85);
				Engine.Player.DrillMechCost = Math.ceil(Engine.Player.DrillMechCost*0.85);
				Engine.Player.FurnaceCost = Math.ceil(Engine.Player.FurnaceCost*0.85);
				Engine.Player.ArmMotorCost = Math.ceil(Engine.Player.ArmMotorCost*0.85);
				Engine.Player.ArmMechCost = Math.ceil(Engine.Player.ArmMechCost*0.85);
				Engine.Player.ArmElecCost = Math.ceil(Engine.Player.ArmElecCost*0.85);
				Engine.Player.SolarArrayElecCost = Math.ceil(Engine.Player.SolarArrayElecCost*0.85);
				Engine.Player.SolarArrayGlassCost = Math.ceil(Engine.Player.SolarArrayGlassCost*0.85);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.WorkshopCost.innerHTML = Engine.Player.WorkshopCost;
				Engine.Display.Workshop.innerHTML = Engine.Player.Workshop;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Personal Workshop Bought!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	}
	},
	
	BuyAApartment: function() {
	
	if (Engine.Player.GenBuilding > 0) {
		if (Engine.Player.Money >= Engine.Player.ApartmentCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.Money -= Engine.Player.ApartmentCost;
				Engine.Player.Apartment++;
				Engine.Player.Land--;
				Engine.Player.ApartmentCost = Math.ceil(Engine.Player.ApartmentCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.ApartmentCost.innerHTML = Engine.Player.ApartmentCost;
				Engine.Display.Apartment.innerHTML = Engine.Player.Apartment;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Apartment Bought!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	}
	},
	
	BuyAOffice: function() {
	
	if (Engine.Player.GenBuilding > 0) {
		if (Engine.Player.Money >= Engine.Player.OfficeCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.Money -= Engine.Player.OfficeCost;
				Engine.Player.Office++;
				Engine.Player.Land--;
				Engine.Player.OfficeCost = Math.ceil(Engine.Player.OfficeCost*1.2);
				Engine.Player.ContractShift = (Math.sqrt(Engine.Player.Office)/5);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.OfficeCost.innerHTML = Engine.Player.OfficeCost;
				Engine.Display.Office.innerHTML = Engine.Player.Office;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Office Bought!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	}
	},
	
	
	/*
	======================
	Cars
	======================
	*/
	
	BuyADealership: function() {
	
	if (Engine.Player.RawCarPS > 9) {
		if (Engine.Player.Money >= Engine.Player.DealershipCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.Money -= Engine.Player.DealershipCost;
				Engine.Player.Dealership++;
				Engine.Player.Land--;
				Engine.Player.DealershipCost = Math.ceil(Engine.Player.DealershipCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.DealershipCost.innerHTML = Engine.Player.DealershipCost;
				Engine.Display.Dealership.innerHTML = Engine.Player.Dealership;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Car Dealership Built!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("Need to increase car production!"); 
	}
	},
	
	BuyARoad: function() {
	if (Engine.Player.Dealership > 0) {
		if (Engine.Player.Land > 0) {
			Engine.Player.Road++;
			Engine.Player.Land--;
			Engine.Player.RawRoad++;
			Engine.Player.DealerShift = (Math.sqrt(Engine.Player.RawRoad)/10);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.Road.innerHTML = Engine.Player.Road;
			Engine.Display.Land.innerHTML = Engine.Player.Land;
			Engine.Status("Road Built!");
		} else {
			Engine.Status("Need to Purchase Land");
		}
	} else {
			Engine.Status("Need to build a dealership first.");
	}
	},
	
	BuyASolarRoad: function() {
	if (Engine.Player.Dealership > 0) {
		if (Engine.Player.SolarArray >= Engine.Player.SolarRoadCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.SolarRoad++;
				Engine.Player.Land--;
				Engine.Player.RawRoad++;
				Engine.Player.DealerShift = (Math.sqrt(Engine.Player.RawRoad)/10);
				Engine.Player.SolarRoadCost = Math.round(Engine.Player.SolarRoadCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.Road.innerHTML = Engine.Player.Road;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Display.SolarRoadCost.innerHTML = Engine.Player.SolarRoadCost;
				Engine.Status("Solar Road Built!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Solar Arrays!"); 
		}
	} else {
			Engine.Status("Need to build a dealership first.");
	}
	},
	
	
	
	/*
	======================
	Planes
	======================
	*/
	
	BuyAAirport: function() {
	
	if (Engine.Player.Airport < 1) {
		if (Engine.Player.Money > 1000000) {
			if (Engine.Player.Land > 4) {
				Engine.Player.Money -= 1000000;
				Engine.Player.Airport++;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.PlaneLimit = 30;
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.AirportCost.innerHTML = Engine.Player.AirportCost;
				Engine.Display.Airport.innerHTML = Engine.Player.Airport;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Airport Built!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("You already own an airport."); 
	}
	},
	
	BuyAHanger: function() {
	
	if (Engine.Player.Airport > 0) {
		if (Engine.Player.Money > Engine.Player.HangerCost) {
			if (Engine.Player.Land > 1) {
				Engine.Player.Money -= Engine.Player.HangerCost;
				Engine.Player.Hanger++;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.PlaneLimit += 5;
				Engine.Player.HangerCost = Math.round(Engine.Player.HangerCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.HangerCost.innerHTML = Engine.Player.HangerCost;
				Engine.Display.Hanger.innerHTML = Engine.Player.Hanger;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Hanger Built!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	BuyATerminal: function() {
	
	if (Engine.Player.Airport > 0) {
		if (Engine.Player.Money > Engine.Player.TerminalCost) {
				Engine.Player.Money -= Engine.Player.TerminalCost;
				Engine.Player.Terminal++;
				Engine.Player.PlaneLimit += 1;
				Engine.Player.AirportMoneyBase += 10;
				Engine.Player.TerminalCost = Math.round(Engine.Player.TerminalCost*1.3);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.TerminalCost.innerHTML = Engine.Player.TerminalCost;
				Engine.Display.Terminal.innerHTML = Engine.Player.Terminal;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("Terminal Built!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	BuyAGiftShop: function() {
	
	if (Engine.Player.Airport > 0) {
		if (Engine.Player.Money > Engine.Player.GiftShopCost) {
				Engine.Player.Money -= Engine.Player.GiftShopCost;
				Engine.Player.GiftShop++;
				Engine.Player.GiftShopCost = Math.round(Engine.Player.GiftShopCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.GiftShopCost.innerHTML = Engine.Player.GiftShopCost;
				Engine.Display.GiftShop.innerHTML = Engine.Player.GiftShop;
				Engine.Display.Land.innerHTML = Engine.Player.Land;
				Engine.Status("GiftShop Built!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	
	
	/*
	======================
	Button Construction 
	======================
	*/
	
	BuyAPermit: function() {
	
		if (Engine.Player.Money > Engine.Player.PermitCost) {
				Engine.Player.Money -= Engine.Player.PermitCost;
				Engine.Player.Permit++;
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Display.Permit.innerHTML = Engine.Player.Permit;
				Engine.Player.PermitCost = Math.round(Engine.Player.PermitCost*1.5);
				Engine.Status("Construction Permit Bought!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	},
	
	BuildAWarehouse: function() {
	
	if (Engine.Player.BuildTime < 1) {
	if (Engine.Player.Permit > 0) {
		if (Engine.Player.ConsPart >= Engine.Player.WarehouseConsPartCost) {
		if (Engine.Player.Glass >= Engine.Player.WarehouseGlassCost) {
		if (Engine.Player.AC >= Engine.Player.WarehouseACCost) {
		if (Engine.Player.Spool >= Engine.Player.WarehouseSpoolCost) {
		if (Engine.Player.Lightbulb >= Engine.Player.WarehouseLightbulbCost) {
				Engine.Player.ConsPart -= Engine.Player.WarehouseConsPartCost;
				Engine.Player.Glass -= Engine.Player.WarehouseGlassCost;
				Engine.Player.AC -= Engine.Player.WarehouseACCost;
				Engine.Player.Spool -= Engine.Player.WarehouseSpoolCost;
				Engine.Player.Lightbulb -= Engine.Player.WarehouseLightbulbCost;
				Engine.Player.Permit--;
				
				
				Engine.Player.BuildTime += Engine.Player.WarehouseBuildTime;
				
				Engine.Player.WarehouseConsPartCost = Math.round(Engine.Player.WarehouseConsPartCost*1.5);
				Engine.Player.WarehouseGlassCost = Math.round(Engine.Player.WarehouseGlassCost*1.5);
				Engine.Player.WarehouseACCost = Math.round(Engine.Player.WarehouseACCost*1.5);
				Engine.Player.WarehouseSpoolCost = Math.round(Engine.Player.WarehouseSpoolCost*1.5);
				Engine.Player.WarehouseLightbulbCost = Math.round(Engine.Player.WarehouseLightbulbCost*1.5);
				Engine.Player.Building = 1;
				
				Engine.Player.WarehouseBuildTimeBase = Math.round(Engine.Player.WarehouseBuildTimeBase*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				
				Engine.Display.WarehouseConsPartCost.innerHTML = Engine.Player.WarehouseConsPartCost;
				Engine.Display.WarehouseGlassCost.innerHTML = Engine.Player.WarehouseGlassCost;
				Engine.Display.WarehouseACCost.innerHTML = Engine.Player.WarehouseACCost;
				Engine.Display.WarehouseSpoolCost.innerHTML = Engine.Player.WarehouseSpoolCost;
				Engine.Display.WarehouseLightbulbCost.innerHTML = Engine.Player.WarehouseLightbulbCost;
				
				Engine.Display.WarehouseBuildTime.innerHTML = Engine.Player.WarehouseBuildTime;
				Engine.Display.BuildTime.innerHTML = Engine.Player.BuildTime;
				Engine.Status("Construction Started!");
		} else {
			Engine.Status("Not enough Lightbulbs!"); 
		}
		} else {
			Engine.Status("Not enough Spool!"); 
		}
		} else {
			Engine.Status("Not enough A/C Units!"); 
		}
		} else {
			Engine.Status("Not enough Glass!"); 
		}
		} else {
			Engine.Status("Not enough Construction Parts!"); 
		}
	} else {
		Engine.Status("You need to buy a permit."); 
	}
	} else {
		Engine.Status("You are already building a project."); 
	}
	},
	
	BuildASkyscraper: function() {
	
	if (Engine.Player.BuildTime < 1) {
	if (Engine.Player.Permit > 0) {
		if (Engine.Player.ConsPart >= Engine.Player.SkyscraperConsPartCost) {
		if (Engine.Player.Glass >= Engine.Player.SkyscraperGlassCost) {
		if (Engine.Player.AC >= Engine.Player.SkyscraperACCost) {
		if (Engine.Player.Spool >= Engine.Player.SkyscraperSpoolCost) {
		if (Engine.Player.Lightbulb >= Engine.Player.SkyscraperLightbulbCost) {
				Engine.Player.ConsPart -= Engine.Player.SkyscraperConsPartCost;
				Engine.Player.Glass -= Engine.Player.SkyscraperGlassCost;
				Engine.Player.AC -= Engine.Player.SkyscraperACCost;
				Engine.Player.Spool -= Engine.Player.SkyscraperSpoolCost;
				Engine.Player.Lightbulb -= Engine.Player.SkyscraperLightbulbCost;
				Engine.Player.Permit--;
				
				
				Engine.Player.BuildTime += Engine.Player.SkyscraperBuildTime;
				
				Engine.Player.SkyscraperConsPartCost = Math.round(Engine.Player.SkyscraperConsPartCost*1.5);
				Engine.Player.SkyscraperGlassCost = Math.round(Engine.Player.SkyscraperGlassCost*1.5);
				Engine.Player.SkyscraperACCost = Math.round(Engine.Player.SkyscraperACCost*1.5);
				Engine.Player.SkyscraperSpoolCost = Math.round(Engine.Player.SkyscraperSpoolCost*1.5);
				Engine.Player.SkyscraperLightbulbCost = Math.round(Engine.Player.SkyscraperLightbulbCost*1.5);
				Engine.Player.Building = 1;
				
				Engine.Player.SkyscraperBuildTimeBase = Math.round(Engine.Player.SkyscraperBuildTimeBase*1.2);
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				
				Engine.Display.SkyscraperConsPartCost.innerHTML = Engine.Player.SkyscraperConsPartCost;
				Engine.Display.SkyscraperGlassCost.innerHTML = Engine.Player.SkyscraperGlassCost;
				Engine.Display.SkyscraperACCost.innerHTML = Engine.Player.SkyscraperACCost;
				Engine.Display.SkyscraperSpoolCost.innerHTML = Engine.Player.SkyscraperSpoolCost;
				Engine.Display.SkyscraperLightbulbCost.innerHTML = Engine.Player.SkyscraperLightbulbCost;
				
				Engine.Display.SkyscraperBuildTime.innerHTML = Engine.Player.SkyscraperBuildTime;
				Engine.Display.BuildTime.innerHTML = Engine.Player.BuildTime;
				Engine.Status("Construction Started!");
		} else {
			Engine.Status("Not enough Lightbulbs!"); 
		}
		} else {
			Engine.Status("Not enough Spool!"); 
		}
		} else {
			Engine.Status("Not enough A/C Units!"); 
		}
		} else {
			Engine.Status("Not enough Glass!"); 
		}
		} else {
			Engine.Status("Not enough Construction Parts!"); 
		}
	} else {
		Engine.Status("You need to buy a permit."); 
	}
	} else {
		Engine.Status("You are already building a project."); 
	}
	},
	
	
	/*
	======================
	Gilded
	======================
	*/
	
	BuyAGildedIronMine: function() {
	
		if (Engine.Player.GoldCoin >= Engine.Player.GildedIronMineCost) {
			Engine.Player.GoldCoin -= Engine.Player.GildedIronMineCost;
			Engine.Player.GildedIronMine++;
			Engine.Player.GildedIronMineCost = Math.ceil(Engine.Player.GildedIronMineCost*1.5);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedIronMine.innerHTML = Engine.Player.GildedIronMine;
			Engine.Status("Gilded Iron Mine Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedIRefinery: function() {
			if (Engine.Player.SRefinery + Math.floor(Engine.Player.GildedIronMine/2) >= (1 + Engine.Player.GildedIRefinery)) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedIRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedIRefineryCost;
					Engine.Player.GildedIRefinery++;
					Engine.Player.GildedIRefineryCost = Math.ceil(Engine.Player.GildedIRefineryCost*1.5);
			
					Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
					Engine.Display.GildedIRefinery.innerHTML = Engine.Player.GildedIRefinery;
					Engine.Status("Gilded Iron Refinery Bought!");
				} else {
					Engine.Status("Not enough Gold Coins!");
				}
			} else {
				Engine.Status("Not enough Gilded Iron Mines!");
			}
			},
	
	BuyAGildedCoalMine: function() {
	
		if (Engine.Player.GoldCoin >= Engine.Player.GildedCoalMineCost) {
			Engine.Player.GoldCoin -= Engine.Player.GildedCoalMineCost;
			Engine.Player.GildedCoalMine++;
			Engine.Player.GildedCoalMineCost = Math.ceil(Engine.Player.GildedCoalMineCost*1.5);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedCoalMine.innerHTML = Engine.Player.GildedCoalMine;
			Engine.Status("Gilded Coal Mine Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedSRefinery: function() {
			if (Math.floor(6*(Engine.Player.GildedCoalMine/9)) >= (1 + Engine.Player.GildedSRefinery)) {
			if (Engine.Player.SRefinery + Math.floor(Engine.Player.GildedIronMine/2) >= (1 + Engine.Player.GildedIRefinery)) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedSRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedSRefineryCost;
					Engine.Player.GildedSRefinery++;
					Engine.Player.GildedSRefineryCost = Math.ceil(Engine.Player.GildedSRefineryCost*1.5);
			
					Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
					Engine.Display.GildedSRefinery.innerHTML = Engine.Player.GildedSRefinery;
					Engine.Status("Gilded Steel Refinery Bought!");
				} else {
					Engine.Status("Not enough Gold Coins!");
				}
			} else {
				Engine.Status("Not enough Gilded Iron Mines!");
			}
			} else {
				Engine.Status("Not enough Gilded Coal Mines!");
			}
			},
	
	BuyAGildedCopperMine: function() {
	
		if (Engine.Player.GoldCoin >= Engine.Player.GildedCopperMineCost) {
			Engine.Player.GoldCoin -= Engine.Player.GildedCopperMineCost;
			Engine.Player.GildedCopperMine++;
			Engine.Player.GildedCopperMineCost = Math.ceil(Engine.Player.GildedCopperMineCost*1.5);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedCopperMine.innerHTML = Engine.Player.GildedCopperMine;
			Engine.Status("Gilded Copper Mine Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedCRefinery: function() {
			if (Math.floor(10*(Engine.Player.GildedCopperMine/15)) >= (1 + Engine.Player.GildedCRefinery)) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedCRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedCRefineryCost;
					Engine.Player.GildedCRefinery++;
					Engine.Player.GildedCRefineryCost = Math.ceil(Engine.Player.GildedCRefineryCost*1.5);
			
					Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
					Engine.Display.GildedCRefinery.innerHTML = Engine.Player.GildedCRefinery;
					Engine.Status("Gilded Copper Refinery Bought!");
				} else {
					Engine.Status("Not enough Gold Coins!");
				}
			} else {
				Engine.Status("Not enough Gilded Copper Mines!");
			}
			},
	
	BuyAGildedOilWell: function() {
	
		if (Engine.Player.GoldCoin >= Engine.Player.GildedOilWellCost) {
			Engine.Player.GoldCoin -= Engine.Player.GildedOilWellCost;
			Engine.Player.GildedOilWell++;
			Engine.Player.GildedOilWellCost = Math.ceil(Engine.Player.GildedOilWellCost*1.5);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedOilWell.innerHTML = Engine.Player.GildedOilWell;
			Engine.Status("Gilded Oil Well Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedGRefinery: function() {
			if (Math.floor((20*Engine.Player.GildedOilWell - (Engine.Player.GildedGRefinery*8 + Engine.Player.GildedPRefinery*12))/8) >= 1) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedGRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedGRefineryCost;
					Engine.Player.GildedGRefinery++;
					Engine.Player.GildedGRefineryCost = Math.ceil(Engine.Player.GildedGRefineryCost*1.5);
			
					Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
					Engine.Display.GildedGRefinery.innerHTML = Engine.Player.GildedGRefinery;
					Engine.Status("Gilded Gas Refinery Bought!");
				} else {
					Engine.Status("Not enough Gold Coins!");
				}
			} else {
				Engine.Status("Not enough Gilded Oil Wells!");
			}
			},
	
	
			BuyAGildedPRefinery: function() {
			if (Math.floor((20*Engine.Player.GildedOilWell - (Engine.Player.GildedGRefinery*8 + Engine.Player.GildedPRefinery*12))/12) >= 1) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedPRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedPRefineryCost;
					Engine.Player.GildedPRefinery++;
					Engine.Player.GildedPRefineryCost = Math.ceil(Engine.Player.GildedPRefineryCost*1.5);
			
					Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
					Engine.Display.GildedPRefinery.innerHTML = Engine.Player.GildedPRefinery;
					Engine.Status("Gilded Plastic Refinery Bought!");
				} else {
					Engine.Status("Not enough Gold Coins!");
				}
			} else {
				Engine.Status("Not enough Gilded Oil Wells!");
			}
			},
	
	BuyAGildedLicense: function() {
	if (Engine.Player.GildedLicense < 1) {
		if (Engine.Player.GoldCoin >= 20) {
			Engine.Player.GoldCoin -= 20;
			Engine.Player.GildedLicense++;
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Values.GildedLicenseStatus.innerHTML = "Gilded License Owned";
			Engine.Status("Gilded License Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
	}
	},
	
	BuyAGildedEngineer: function() {
	if (Engine.Player.GildedEngineer < 29) {
	if (Engine.Player.GoldCoin >= Engine.Player.GildedEngineerCost) {
		Engine.Player.GoldCoin -= Engine.Player.GildedEngineerCost;
		Engine.Player.GildedEngineer++;
		Engine.Player.GildedEngineerCost = Math.ceil(Engine.Player.GildedEngineerCost*1.7);
			
		Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
		Engine.Display.GildedEngineer.innerHTML = Engine.Player.GildedEngineer;
		Engine.Status("Gilded Engineer Hired!");
	} else {
		Engine.Status("Not enough Gold Coins!");
	}
	} else {
		Engine.Status("You hired the max amount of Engineers!");
	}
	},
	
	BuyAGildedForeman: function() {
	if (Engine.Player.GoldCoin >= Engine.Player.GildedForemanCost) {
		Engine.Player.GoldCoin -= Engine.Player.GildedForemanCost;
		Engine.Player.GildedForeman++;
		Engine.Player.GildedForemanCost = Math.ceil(Engine.Player.GildedForemanCost*1.7);
			
		Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
		Engine.Display.GildedForeman.innerHTML = Engine.Player.GildedForeman;
		Engine.Status("Gilded Foreman Hired!");
	} else {
		Engine.Status("Not enough Gold Coins!");
	}
	},
	
	
	/*
	======================
	Button Crime
	======================
	*/
	
	
	BuyAWeedplant: function() {
	
		if (Engine.Player.Money >= Engine.Player.WeedPlantCost) {
			Engine.Player.Money -= Engine.Player.WeedPlantCost;
			Engine.Player.WeedPlant++;
			Engine.Player.WeedPlantCost = Math.ceil(Engine.Player.WeedPlantCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.WeedPlant.innerHTML = Engine.Player.WeedPlant;
			Engine.Status("''Fern'' Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellWeed: function() {
	
		if (Engine.Player.Weed > 0) {
			Engine.Player.Weed--;
			Engine.Player.Money += 10;
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.Weed.innerHTML = Engine.Player.Weed;
			Engine.Status("Weed Sold...");
		} else {
			Engine.Status("Not enough Weed!");
		}
	},
	
	BuyAWeedDealer: function() {
	
		if (Engine.Player.Money >= Engine.Player.WeedDealerCost) {
			Engine.Player.Money -= Engine.Player.WeedDealerCost;
			Engine.Player.WeedDealer++;
			Engine.Player.WeedDealerCost = Math.ceil(Engine.Player.WeedDealerCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.WeedDealer.innerHTML = Engine.Player.WeedDealer;
			Engine.Status("Weed Dealer Hired!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	
	/*
	======================
	License
	======================
	*/
	
	Retire: function() {
		if (Engine.Player.Money > 1000000) {
			Engine.Player.GoldCoin += Engine.Values.GoldCoinGain;
			Engine.ResetValues();
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			
			Engine.Save();
			
		} else {
		
			Engine.Status("You need atleast $1,000,000 to retire!");
			
		}
	
	},
	
	UnlockCoal: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenCoal < 1) {
				Engine.Player.GenCoal++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Coal License Purchased!");
	
			} else {
				Engine.Status("Coal License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	UnlockCopper: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenCopper < 1) {
				Engine.Player.GenCopper++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Copper License Purchased!");
	
			} else {
				Engine.Status("Copper License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	UnlockOil: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenOil < 1) {
				Engine.Player.GenOil++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Oil License Purchased!");
	
			} else {
				Engine.Status("Oil License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	UnlockGlass: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenGlass < 1) {
				Engine.Player.GenGlass++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Glass License Purchased!");
	
			} else {
				Engine.Status("Glass License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	UnlockPower: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenPower < 1) {
				Engine.Player.GenPower++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Power License Purchased!");
	
			} else {
				Engine.Status("Power License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	UnlockBuilding: function() {
		if (Engine.Player.Money > Engine.Player.GenCost) {
	
			if (Engine.Player.GenBuilding < 1) {
				Engine.Player.GenBuilding++;
				Engine.Player.Generations++;
				Engine.Player.Money -= Engine.Player.GenCost;
				Engine.Player.GenCost = 1000*Math.pow(5, Engine.Player.Generations)
			
				Engine.Display.Money.innerHTML = Engine.Player.Money;
				Engine.Status("Building License Purchased!");
	
			} else {
				Engine.Status("Building License already bought!");
			}
		
			
		} else {
		
			Engine.Status("Not enough money for license!");
			
		}
		
	},
	
	
	
	ResetValues: function() {
		Engine.Player.Money = 150;
		Engine.Player.ContractShift = 0;
		
		//Iron
		Engine.Player.Iron = 0;
		Engine.Player.IronMine = 0;
		Engine.Player.IronDrill = 0;
		Engine.Player.IronContract = 0;
		Engine.Player.IronAntiContract = 0;
		Engine.Player.IronContractMoney = 0;
		
		Engine.Player.IronMineCost = 100;
		Engine.Player.IronContractCost = 50;
		
		//Refined Iron
		Engine.Player.RefIron = 0;
		Engine.Player.IRefinery = 0;
		Engine.Player.CombIRefinery = 0;
		Engine.Player.RefIronContract = 0;
		Engine.Player.RefIronAntiContract = 0;
		Engine.Player.RefIronContractMoney = 0;
		
		Engine.Player.IRefineryCost = 2000;
		Engine.Player.RefIronContractCost = 500;
		
		//Motor
		Engine.Player.Motor = 0;
		Engine.Player.MotorFact = 0;
		Engine.Player.MotorFactArm = 0;
		Engine.Player.MotorContract = 0;
		Engine.Player.MotorAntiContract = 0;
		Engine.Player.MotorContractMoney = 0;
		
		Engine.Player.MotorFactCost = 30000;
		Engine.Player.MotorContractCost = 25;
		
		//Car
		Engine.Player.Car = 0;
		Engine.Player.CarFact = 0;
		Engine.Player.CarFactArm = 0;
		Engine.Player.CarContract = 0;
		Engine.Player.CarAntiContract = 0;
		Engine.Player.CarContractMoney = 0;
		
		Engine.Player.CarFactCost = 200000;
		Engine.Player.CarContractCost = 2000;
		
		//Plane
		Engine.Player.Plane = 0;
		Engine.Player.PlaneFact = 0;
		Engine.Player.PlaneContract = 0;
		
		Engine.Player.PlaneFactCost = 700000;
		
		
		//Coal
		Engine.Player.Coal = 0;
		Engine.Player.CoalMine = 0;
		Engine.Player.CoalDrill = 0;
		Engine.Player.CoalContract = 0;
		Engine.Player.CoalAntiContract = 0;
		Engine.Player.CoalContractMoney = 0;
		
		Engine.Player.CoalMineCost = 100;
		Engine.Player.CoalContractCost = 30;
		
		//Steel
		Engine.Player.Steel = 0;
		Engine.Player.SRefinery = 0;
		Engine.Player.CombSRefinery = 0;
		Engine.Player.SteelContract = 0;
		Engine.Player.SteelAntiContract = 0;
		Engine.Player.SteelContractMoney = 0;
		
		Engine.Player.SRefineryCost = 1500;
		Engine.Player.SteelContractCost = 250;
		
		//Mech Part
		Engine.Player.MechPart = 0;
		Engine.Player.MechPartFact = 0;
		Engine.Player.MechPartFactArm = 0;
		Engine.Player.MechPartContract = 0;
		Engine.Player.MechPartAntiContract = 0;
		
		Engine.Player.MechPartFactCost = 25000;
		Engine.Player.MechPartContractCost = 900;
		
		//Construction Part
		Engine.Player.ConsPart = 0;
		Engine.Player.ConsPartFact = 0;
		Engine.Player.ConsPartContract = 0;
		Engine.Player.ConsPartAntiContract = 0;
		
		Engine.Player.ConsPartFactCost = 30000;
		
		//AC Unit
		Engine.Player.AC = 0;
		Engine.Player.ACFact = 0;
		Engine.Player.ACFactArm = 0;
		Engine.Player.ACContract = 0;
		Engine.Player.ACAntiContract = 0;
		Engine.Player.ACContractMoney = 0;
		
		Engine.Player.ACFactCost = 100000;
		Engine.Player.ACContractCost = 50;
		
		
		//Copper
		Engine.Player.Copper = 0;
		Engine.Player.CopperMine = 0;
		Engine.Player.CopperDrill = 0;
		Engine.Player.CopperContract = 0;
		Engine.Player.CopperAntiContract = 0;
		Engine.Player.CopperContractMoney = 0;
		
		Engine.Player.CopperMineCost = 150;
		Engine.Player.CopperContractCost = 30;
		
		//Refined Copper
		Engine.Player.RefCopper = 0;
		Engine.Player.CRefinery = 0;
		Engine.Player.CombCRefinery = 0;
		Engine.Player.RefCopperContract = 0;
		Engine.Player.RefCopperAntiContract = 0;
		Engine.Player.RefCopperContractMoney = 0;
		
		Engine.Player.CRefineryCost = 3000;
		Engine.Player.RefCopperContractCost = 100;
		
		//Spools
		Engine.Player.Spool = 0;
		Engine.Player.Spooler = 0;
		Engine.Player.SpoolerArm = 0;
		Engine.Player.SpoolContract = 0;
		Engine.Player.SpoolAntiContract = 0;
		Engine.Player.SpoolContractMoney = 0;
		
		Engine.Player.SpoolerCost = 50000;
		Engine.Player.SpoolContractCost = 500;
		
		//Electronic
		Engine.Player.Electronic = 0;
		Engine.Player.ElecFact = 0;
		Engine.Player.ElecFactArm = 0;
		Engine.Player.ElecContract = 0;
		Engine.Player.ElecAntiContract = 0;
		Engine.Player.ElecContractMoney = 0;
		
		Engine.Player.ElecFactCost = 350000;
		Engine.Player.ElecContractCost = 1750;
		
		
		//Oil
		Engine.Player.Oil = 0;
		Engine.Player.OilMine = 0;
		Engine.Player.OilAntiContract = 0;
		
		Engine.Player.OilMineCost = 500;
		Engine.Player.OilContractCost = 30;
		
		//Gas
		Engine.Player.Gas = 0;
		Engine.Player.GRefinery = 0;
		Engine.Player.GasContract = 0;
		Engine.Player.GasAntiContract = 0;
		Engine.Player.GasContractMoney = 0;
		
		Engine.Player.GRefineryCost = 300;
		Engine.Player.GasContractCost = 10;
		
		//Plastic
		Engine.Player.Plastic = 0;
		Engine.Player.PRefinery = 0;
		Engine.Player.PlasticContract = 0;
		Engine.Player.PlasticAntiContract = 0;
		Engine.Player.PlasticContractMoney = 0;
		
		Engine.Player.PRefineryCost = 300;
		Engine.Player.PlasticContractCost = 15;
		
		
		//Sand
		Engine.Player.Sand = 0;
		Engine.Player.Shifter = 0;
		Engine.Player.SandAntiContract = 0;
		
		Engine.Player.ShifterMotorCost = 3;
		Engine.Player.ShifterMechCost = 25;
		
		//Glass
		Engine.Player.GlassFurnace = 0;
		Engine.Player.Glass = 0;
		Engine.Player.GlassContract = 0;
		Engine.Player.GlassAntiContract = 0;
		Engine.Player.GlassContractMoney = 0;
		
		Engine.Player.GlassContractCost = 2500;
		
		//Glass
		Engine.Player.LightbulbFact = 0;
		Engine.Player.LightbulbFactArm = 0;
		Engine.Player.Lightbulb = 0;
		Engine.Player.LightbulbContract = 0;
		Engine.Player.LightbulbAntiContract = 0;
		Engine.Player.LightbulbContractMoney = 0;
		
		Engine.Player.LightbulbFactCost = 150000;
		Engine.Player.LightbulbContractCost = 4500;
		
		
		//Drill
		Engine.Player.Drill = 0;
		
		Engine.Player.DrillMotorCost = 5;
		Engine.Player.DrillMechCost = 35;
		
		
		//Furnace
		Engine.Player.Furnace = 0;
		
		Engine.Player.FurnaceCost = 150;
		
		//Arms
		Engine.Player.Arm = 0;
		
		Engine.Player.ArmMotorCost = 5;
		Engine.Player.ArmMechCost = 35;
		Engine.Player.ArmElecCost = 50;
		
		
		//Array		
		Engine.Player.SolarArray = 0;
		Engine.Player.SolarArrayElecCost = 10;
		Engine.Player.SolarArrayGlassCost = 100;
		
		
		//Power
		Engine.Player.MWh = 0;
		Engine.Player.MWhCost = 8;
		
		Engine.Player.PowerLine = 0;
		Engine.Player.PowerLineCost = 1000;
		
		Engine.Player.CoalPlant = 0;
		Engine.Player.CoalPlantCost = 50000;
		
		Engine.Player.SolarPlant = 0;
		Engine.Player.SolarPlantCost = 3;
		
		Engine.Player.NuclearPlant = 0;
		Engine.Player.NuclearPlantCost = 250000;
		Engine.Player.UraniumCost = 100;
		
		
		
		// Buildings =
		Engine.Player.Land = 0;
		Engine.Player.LandCost = 500;
		
		Engine.Player.Workshop = 0;
		Engine.Player.WorkshopCost = 10000;
		
		Engine.Player.Apartment = 0;
		Engine.Player.ApartmentCost = 10000;
		
		Engine.Player.Office = 0;
		Engine.Player.OfficeCost = 10000;
		
		
		// Cars
		Engine.Player.RawCarPS = 0;
		
		Engine.Player.Dealership = 0;
		Engine.Player.DealershipCost = 350000;
		
		Engine.Player.Road = 0;
		Engine.Player.SolarRoad = 0;
		Engine.Player.SolarRoadCost = 5;
		
		Engine.Player.RawRoad = 0;
		Engine.Player.DealerShift = 0;
		
		
		// Planes
		Engine.Player.Airport = 0;
		Engine.Player.AirportMoneyBase = 500;
		Engine.Player.AirportMoney = 500;
		Engine.Player.PlaneLimit = 0;
		
		Engine.Player.Hanger = 0;
		Engine.Player.HangerCost = 50000;
		
		Engine.Player.Terminal = 0;
		Engine.Player.TerminalCost = 85000;
		
		Engine.Player.GiftShop = 0;
		Engine.Player.GiftShopCost = 115000;
		
		// Construction
		Permit: 0;
		Warehouse: 500;
		Skyscraper: 500;
		
		BuildTime: 0;
		
		WarehouseConsPartCost: 500;
		WarehouseSpoolCost: 50;
		WarehouseGlassCost: 500;
		WarehouseACCost: 10;
		WarehouseLightbulbCost: 250;
		
		SkyscraperConsPartCost: 5000;
		SkyscraperSpoolCost: 300;
		SkyscraperGlassCost: 10000;
		SkyscraperACCost: 200;
		SkyscraperLightbulbCost: 4000;
		
		
		Engine.Player.ThirtySecondCounter = 0;
		
		if (Engine.Player.GildedLicense < 1) {
			Engine.Player.Generations = 0;
			Engine.Player.GenPoints = 0;
			Engine.Player.GenCost = 1000;
			Engine.Player.GenCoal = 0;
			Engine.Player.GenCopper = 0;
			Engine.Player.GenOil = 0;
			Engine.Player.GenGlass = 0;
			Engine.Player.GenPower = 0;
			Engine.Player.GenBuilding = 1;
		} 
	},
	
	// We need a new function for save
	Save: function() {
		var tmpSavefile = JSON.stringify(Engine.Player);
		
		window.localStorage.setItem("savefile", tmpSavefile);
		
		Engine.Status("Saved!");
		
	},
	
	// And we need a new function for load
	Load: function() {
		
		if (!window.localStorage.getItem("savefile")) {
			
			Engine.Status("No save file present");
			
		} else {
			
			var tmpSavefile = window.localStorage.getItem("savefile");
			
			Engine.Player = JSON.parse(tmpSavefile);
			
			Engine.Status("Loaded successfully!")
				
			
		}
	},
	
	Delete: function() {
		
		if (!window.localStorage.getItem("savefile")) {
			
			Engine.Status("No save file present for deletion");
			
		} else {
			
			window.localStorage.removeItem("savefile");
			
			Engine.Status("Deleted successfully!");
			
		}
		
	},
	
	IdleTimer: function() {
		Engine.TimeNow = new Date().getTime();		
		var timeDifference = Engine.TimeNow - Engine.TimeThen - Engine.Ticks;
		while (timeDifference >= Engine.IdleSpeed) {
		
			Engine.AutoSave++
			Engine.TwoSecondCounter++
			if (Engine.Player.PlaneFact > 0) {
				Engine.Player.ThirtySecondCounter++
			}
			
			if (Engine.AutoSave >= 30) {
				var tmpSavefile = JSON.stringify(Engine.Player);
		
				window.localStorage.setItem("savefile", tmpSavefile);
				
				Engine.Status("Autosaved!");
				
				Engine.AutoSave = 0
			}
				
			if (Engine.Player.Money < 0) {
				if (Engine.Player.GoldCoin > 0) {
					Engine.Player.GoldCoin--;
					Engine.Player.Money += 500000;
					Engine.Status("Sold a gold coin to stay in business!");
					Engine.Display.Money.innerHTML = Engine.Player.Money;
				} else {
					window.localStorage.removeItem("savefile");
					var modal = document.getElementById('myModal');
					modal.style.display = "block";
					Engine.AutoSave = 0
				}
			}
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.GenCoalStatus.innerHTML = "Unlocked";
				Engine.Values.GenCoalStatus2.innerHTML = "";
			} else {
				Engine.Values.GenCoalStatus.innerHTML = "Locked";
				Engine.Values.GenCoalStatus2.innerHTML = "The Coal Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenCopper > 0) {
				Engine.Values.GenCopperStatus.innerHTML = "Unlocked";
				Engine.Values.GenCopperStatus2.innerHTML = "";
			} else {
				Engine.Values.GenCopperStatus.innerHTML = "Locked";
				Engine.Values.GenCopperStatus2.innerHTML = "The Copper Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.GenOilStatus.innerHTML = "Unlocked";
				Engine.Values.GenOilStatus2.innerHTML = "";
			} else {
				Engine.Values.GenOilStatus.innerHTML = "Locked";
				Engine.Values.GenOilStatus2.innerHTML = "The Oil Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenGlass > 0) {
				Engine.Values.GenGlassStatus.innerHTML = "Unlocked";
				Engine.Values.GenGlassStatus2.innerHTML = "";
			} else {
				Engine.Values.GenGlassStatus.innerHTML = "Locked";
				Engine.Values.GenGlassStatus2.innerHTML = "The Glass Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenPower > 0) {
				Engine.Values.GenPowerStatus.innerHTML = "Unlocked";
				Engine.Values.GenPowerStatus2.innerHTML = "";
			} else {
				Engine.Values.GenPowerStatus.innerHTML = "Locked";
				Engine.Values.GenPowerStatus2.innerHTML = "The Power Branch is currently LOCKED";
			}
			
			if (Engine.Player.Workshop > 0) {
				Engine.Values.WorkshopStatus2.innerHTML = "";
			} else {
				Engine.Values.WorkshopStatus2.innerHTML = "Build a Personal Workshop to build:";
			}
			
			if (Engine.Player.Dealership > 0) {
				Engine.Values.DealershipStatus2.innerHTML = "";
			} else {
				Engine.Values.DealershipStatus2.innerHTML = "Build a Dealership to build:";
			}
			
			
			if (Engine.Player.Airport > 0) {
				Engine.Values.AirportStatus.innerHTML = "Airport Owned";
				Engine.Values.AirportStatus2.innerHTML = "";
			} else {
				Engine.Values.AirportStatus.innerHTML = "Cost: 5 Empty Lots + $1,000,000 K";
				Engine.Values.AirportStatus2.innerHTML = "Build an Airport to build:";
			}
			
			
			if (Engine.Player.GildedLicense > 0) {
				Engine.Values.GildedLicenseStatus.innerHTML = "Gilded License Owned";
			} else {
				Engine.Values.GildedLicenseStatus.innerHTML = "Cost: 20 Gold Coins";
			}
			
			
			//ContractShit
			
			Engine.Player.IronContractMoney = Math.ceil(20*(1 + Engine.Player.ContractShift));
			Engine.Player.RefIronContractMoney = Math.ceil(90*(1 + Engine.Player.ContractShift));
			Engine.Player.MotorContractMoney = Math.ceil(175*(1 + Engine.Player.ContractShift));
			Engine.Player.CarContractMoney = Math.ceil(4750*(1 + Engine.Player.ContractShift));
			
			Engine.Player.CoalContractMoney = Math.ceil(25*(1 + Engine.Player.ContractShift));
			Engine.Player.SteelContractMoney = Math.ceil(70*(1 + Engine.Player.ContractShift));
			Engine.Player.ACContractMoney = Math.ceil(1800*(1 + Engine.Player.ContractShift));
			
			Engine.Player.CopperContractMoney = Math.ceil(15*(1 + Engine.Player.ContractShift));
			Engine.Player.RefCopperContractMoney = Math.ceil(45*(1 + Engine.Player.ContractShift));
			Engine.Player.SpoolContractMoney = Math.ceil(300*(1 + Engine.Player.ContractShift));
			Engine.Player.ElecContractMoney = Math.ceil(700*(1 + Engine.Player.ContractShift));
			
			Engine.Player.GasContractMoney = Math.ceil(60*(1 + Engine.Player.ContractShift));
			Engine.Player.PlasticContractMoney = Math.ceil(75*(1 + Engine.Player.ContractShift));
			
			Engine.Player.GlassContractMoney = Math.ceil(1000*(1 + Engine.Player.ContractShift));
			Engine.Player.LightbulbContractMoney = Math.ceil(1250*(1 + Engine.Player.ContractShift));
			
			Engine.Player.RawCarPS = Engine.Player.CarFact*2 + Engine.Player.CarFactArm*6 - Engine.Player.Dealership*10;
			Engine.Player.CarDealerMoney = Math.ceil(15000*(1 + Engine.Player.DealerShift));

			Engine.Player.AirportMoney = Math.ceil(Engine.Player.AirportMoneyBase * (1 + (Engine.Player.GiftShop*0.1)));

			
			
			Engine.TillAutoSave = 30 - Engine.AutoSave;
			Engine.Display.TillAutoSave.innerHTML = Engine.TillAutoSave;
		
			//Iron
			
			Engine.Player.Iron += Engine.Player.IronMine*5;
			Engine.Player.Iron += Engine.Player.IronDrill*20;
			Engine.Player.Iron += Engine.Player.GildedIronMine*10;
			Engine.Player.Money += Engine.Player.IronContract*Engine.Player.IronContractMoney;
			
			Engine.Player.Iron -= Engine.Player.IronContract*10;
			Engine.Player.Iron -= Engine.Player.IRefinery*20;
			Engine.Player.Iron -= Engine.Player.CombIRefinery*40;
			Engine.Player.Iron -= Engine.Player.GildedIRefinery*20;
			
			Engine.Player.Iron -= Engine.Player.SRefinery*10;
			Engine.Player.Iron -= Engine.Player.CombSRefinery*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Iron -= Engine.Player.GildedSRefinery*10;
			}
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.IronPS = Engine.Player.IronMine*5 + Engine.Player.IronDrill*20 + Engine.Player.GildedIronMine*10 - Engine.Player.IronContract*10 - Engine.Player.IRefinery*20 - Engine.Player.SRefinery*10 - Engine.Player.CombIRefinery*40 - Engine.Player.CombSRefinery*30 - Engine.Player.GildedIRefinery*20 - Engine.Player.GildedSRefinery*10;
			} else {
				Engine.Values.IronPS = Engine.Player.IronMine*5 + Engine.Player.IronDrill*20 + Engine.Player.GildedIronMine*10 - Engine.Player.IronContract*10 - Engine.Player.IRefinery*20 - Engine.Player.SRefinery*10 - Engine.Player.CombIRefinery*40 - Engine.Player.CombSRefinery*30 - Engine.Player.GildedIRefinery*20;
			}
			if (Engine.Values.IronPS < 0) {
				Engine.Player.Iron += Engine.Player.IronAntiContract*10;
				Engine.Player.Money -= Engine.Player.IronAntiContract*Engine.Player.IronContractMoney;
				while (Engine.Player.Iron < 0) {
					if (Engine.Player.IronContract > 0) {
						Engine.Player.Iron += Engine.Player.IronContract*10;
						Engine.BreakAIronContract();
						Engine.Player.Iron -= Engine.Player.IronContract*10;
					} else {
					
					Engine.Player.IronAntiContract = Math.ceil(Engine.Values.IronPS/-10);
					Engine.Player.Iron += Engine.Player.IronAntiContract*10;
					Engine.Player.Money -= Engine.Player.IronAntiContract*Engine.Player.IronContractMoney;
					Engine.Status("Ran out of Iron! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.IronAntiContract > Math.ceil(Engine.Values.IronPS/-10)) {
					Engine.Player.IronAntiContract--;
					Engine.Status("A Iron Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.IronAntiContract > 0) {
					Engine.Player.IronAntiContract = 0;
					Engine.Status("All Iron Anti-Contracts broken!");
				}
			}
			
			//Refined Iron
			Engine.Player.RefIron += Engine.Player.IRefinery*10;
			Engine.Player.RefIron += Engine.Player.CombIRefinery*30;
			Engine.Player.RefIron += Engine.Player.GildedIRefinery*10;
			Engine.Player.Money += Engine.Player.RefIronContract*Engine.Player.RefIronContractMoney;
			
			Engine.Player.RefIron -= Engine.Player.RefIronContract*10;
			Engine.Player.RefIron -= Engine.Player.MotorFact*10;
			Engine.Player.RefIron -= Engine.Player.MotorFactArm*30;
			
			Engine.Values.RefIronPS = Engine.Player.IRefinery*10 + Engine.Player.CombIRefinery*30 + Engine.Player.GildedIRefinery*10 - Engine.Player.RefIronContract*10 - Engine.Player.MotorFact*10 - Engine.Player.MotorFactArm*30;
			
			if (Engine.Values.RefIronPS < 0) {
				Engine.Player.RefIron += Engine.Player.RefIronAntiContract*10;
				Engine.Player.Money -= Engine.Player.RefIronAntiContract*Engine.Player.RefIronContractMoney;
				while (Engine.Player.RefIron < 0) {
					if (Engine.Player.RefIronContract > 0) {
						Engine.Player.RefIron += Engine.Player.RefIronContract*10;
						Engine.BreakARefIronContract();
						Engine.Player.RefIron -= Engine.Player.RefIronContract*10;
					} else {
					
					Engine.Player.RefIronAntiContract = Math.ceil(Engine.Values.RefIronPS/-10);
					Engine.Player.RefIron += Engine.Player.RefIronAntiContract*10;
					Engine.Player.Money -= Engine.Player.RefIronAntiContract*Engine.Player.RefIronContractMoney;
					Engine.Status("Ran out of Refined Iron! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.RefIronAntiContract > Math.ceil(Engine.Values.RefIronPS/-10)) {
					Engine.Player.RefIronAntiContract--;
					Engine.Status("A Refined Iron Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.RefIronAntiContract > 0) {
					Engine.Player.RefIronAntiContract = 0;
					Engine.Status("All Refined Iron Anti-Contracts broken!");
				}
			}
			
			//Motor
			Engine.Player.Motor += Engine.Player.MotorFact*1;
			Engine.Player.Motor += Engine.Player.MotorFactArm*3;
			Engine.Player.Money += Engine.Player.MotorContract*Engine.Player.MotorContractMoney;
			
			Engine.Player.Motor -= Engine.Player.MotorContract*1;
			Engine.Player.Motor -= Engine.Player.ACFact*2;
			Engine.Player.Motor -= Engine.Player.ACFactArm*6;
			Engine.Player.Motor -= Engine.Player.CarFact*2;
			Engine.Player.Motor -= Engine.Player.CarFactArm*6;
			Engine.Player.Motor -= Engine.Player.PlaneFact*10;
			
			Engine.Values.MotorPS = Engine.Player.MotorFact*1 + Engine.Player.MotorFactArm*3 - Engine.Player.MotorContract*1 - Engine.Player.ACFact*2 - Engine.Player.ACFactArm*6 - Engine.Player.CarFact*2 - Engine.Player.CarFactArm*6 - Engine.Player.PlaneFact*10;
			
			if (Engine.Values.MotorPS < 0) {
				Engine.Player.Motor += Engine.Player.MotorAntiContract*1;
				Engine.Player.Money -= Engine.Player.MotorAntiContract*Engine.Player.MotorContractMoney;
				while (Engine.Player.Motor < 0) {
					if (Engine.Player.MotorContract > 0) {
						Engine.Player.Motor += Engine.Player.MotorContract*1;
						Engine.BreakAMotorContract();
						Engine.Player.Motor -= Engine.Player.MotorContract*1;
					} else {
					
					Engine.Player.MotorAntiContract++;
					Engine.Player.Motor += Engine.Player.MotorAntiContract*1;
					Engine.Player.Money -= Engine.Player.MotorAntiContract*Engine.Player.MotorContractMoney;
					Engine.Status("Ran out of Motors! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.MotorAntiContract > Math.ceil(Engine.Values.MotorPS/-1)) {
					Engine.Player.MotorAntiContract--;
					Engine.Status("A Motor Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.MotorAntiContract > 0) {
					Engine.Player.MotorAntiContract = 0;
					Engine.Status("All Motor Anti-Contracts broken!");
				}
			}
			
			//Car
			Engine.Player.Car += Engine.Player.CarFact*2;
			Engine.Player.Car += Engine.Player.CarFactArm*6;
			Engine.Player.Money += Engine.Player.CarContract*Engine.Player.CarContractMoney;
			Engine.Player.Money += Engine.Player.Dealership*Engine.Player.CarDealerMoney;
			
			Engine.Player.Car -= Engine.Player.CarContract*5;
			Engine.Player.Car -= Engine.Player.Dealership*10;
			
			Engine.Values.CarPS = Engine.Player.CarFact*2 + Engine.Player.CarFactArm*6 - Engine.Player.CarContract*5 - Engine.Player.Dealership*10;
			
			if (Engine.Values.CarPS < 0) {
				Engine.Player.Car += Engine.Player.CarAntiContract*2;
				Engine.Player.Money -= Engine.Player.CarAntiContract*Engine.Player.CarContractMoney;
				while (Engine.Player.Car < 0) {
					if (Engine.Player.CarContract > 0) {
						Engine.Player.Car += Engine.Player.CarContract*2;
						Engine.BreakACarContract();
						Engine.Player.Car -= Engine.Player.CarContract*2;
					} else {
					
					Engine.Player.CarAntiContract++;
					Engine.Player.Car += Engine.Player.CarAntiContract*2;
					Engine.Player.Money -= Engine.Player.CarAntiContract*Engine.Player.CarContractMoney;
					Engine.Status("Ran out of Cars! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.CarAntiContract > Math.ceil(Engine.Values.CarPS/-2)) {
					Engine.Player.CarAntiContract--;
					Engine.Status("A Car Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.CarAntiContract > 0) {
					Engine.Player.CarAntiContract = 0;
					Engine.Status("All Car Anti-Contracts broken!");
				}
			}
			
			//Plane
			if (Engine.Player.ThirtySecondCounter > (29 - Engine.Player.GildedEngineer)) {
				if (Engine.Player.Plane < Engine.Player.PlaneLimit) {
					Engine.Player.Plane += Engine.Player.PlaneFact*1;
				}
				Engine.Player.ThirtySecondCounter = 0;
			}
			
			
			Engine.Values.PlanePS = Engine.Player.PlaneFact*1;
			Engine.Player.Money += Engine.Player.Plane*Engine.Player.AirportMoney;
			
			
				
			
			//Coal
			Engine.Player.Coal += Engine.Player.CoalMine*3;
			Engine.Player.Coal += Engine.Player.CoalDrill*12;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Coal += Engine.Player.GildedCoalMine*6;
				Engine.Player.Coal -= Engine.Player.GildedSRefinery*9;
			}
			Engine.Player.Money += Engine.Player.CoalContract*Engine.Player.CoalContractMoney;
			
			Engine.Player.Coal -= Engine.Player.CoalContract*10;
			Engine.Player.Coal -= Engine.Player.SRefinery*9;
			Engine.Player.Coal -= Engine.Player.CombSRefinery*27;
			Engine.Player.Coal -= Engine.Player.CoalPlant*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.CoalPS = Engine.Player.CoalMine*3 + Engine.Player.CoalDrill*12 + Engine.Player.GildedCoalMine*6 - Engine.Player.CoalContract*10 - Engine.Player.SRefinery*9 - Engine.Player.CombSRefinery*27 - Engine.Player.CoalPlant*30 - Engine.Player.GildedSRefinery*9;
			} else {
				Engine.Values.CoalPS = Engine.Player.CoalMine*3 + Engine.Player.CoalDrill*12 - Engine.Player.CoalContract*10 - Engine.Player.SRefinery*9 - Engine.Player.CombSRefinery*27 - Engine.Player.CoalPlant*30;
			}
			if (Engine.Values.CoalPS < 0) {
				Engine.Player.Coal += Engine.Player.CoalAntiContract*10;
				Engine.Player.Money -= Engine.Player.CoalAntiContract*Engine.Player.CoalContractMoney;
				while (Engine.Player.Coal < 0) {
					if (Engine.Player.CoalContract > 0) {
						Engine.Player.Coal += Engine.Player.CoalContract*10;
						Engine.BreakACoalContract();
						Engine.Player.Coal -= Engine.Player.CoalContract*10;
					} else {
					
					Engine.Player.CoalAntiContract = Math.ceil(Engine.Values.CoalPS/-10);;
					Engine.Player.Coal += Engine.Player.CoalAntiContract*10;
					Engine.Player.Money -= Engine.Player.CoalAntiContract*Engine.Player.CoalContractMoney;
					Engine.Status("Ran out of Coal! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.CoalAntiContract > Math.ceil(Engine.Values.CoalPS/-10)) {
					Engine.Player.CoalAntiContract--;
					Engine.Status("A Coal Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.CoalAntiContract > 0) {
					Engine.Player.CoalAntiContract = 0;
					Engine.Status("All Coal Anti-Contracts broken!");
				}
			}
			
			//Steel
			Engine.Player.Steel += Engine.Player.SRefinery*10;
			Engine.Player.Steel += Engine.Player.CombSRefinery*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Steel += Engine.Player.GildedSRefinery*10;
			}
			Engine.Player.Money += Engine.Player.SteelContract*Engine.Player.SteelContractMoney;
			
			Engine.Player.Steel -= Engine.Player.SteelContract*10;
			Engine.Player.Steel -= Engine.Player.MechPartFact*5;
			Engine.Player.Steel -= Engine.Player.MechPartFactArm*15;
			Engine.Player.Steel -= Engine.Player.MotorFact*5;
			Engine.Player.Steel -= Engine.Player.MotorFactArm*15;
			Engine.Player.Steel -= Engine.Player.ConsPartFact*30;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.SteelPS = Engine.Player.SRefinery*10 + Engine.Player.CombSRefinery*30 + Engine.Player.GildedSRefinery*10 - Engine.Player.SteelContract*10 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*30 - Engine.Player.MotorFact*5 - Engine.Player.MotorFactArm*15;
			} else {
				Engine.Values.SteelPS = Engine.Player.SRefinery*10 + Engine.Player.CombSRefinery*30 - Engine.Player.SteelContract*10 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*30 - Engine.Player.MotorFact*5 - Engine.Player.MotorFactArm*15;
			}
			if (Engine.Values.SteelPS < 0) {
				Engine.Player.Steel += Engine.Player.SteelAntiContract*10;
				Engine.Player.Money -= Engine.Player.SteelAntiContract*Engine.Player.SteelContractMoney;
				while (Engine.Player.Steel < 0) {
					if (Engine.Player.SteelContract > 0) {
						Engine.Player.Steel += Engine.Player.SteelContract*10;
						Engine.BreakASteelContract();
						Engine.Player.Steel -= Engine.Player.SteelContract*10;
					} else {
					
					Engine.Player.SteelAntiContract++;
					Engine.Player.Steel += Engine.Player.SteelAntiContract*10;
					Engine.Player.Money -= Engine.Player.SteelAntiContract*Engine.Player.SteelContractMoney;
					Engine.Status("Ran out of Steel! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.SteelAntiContract > Math.ceil(Engine.Values.SteelPS/-10)) {
					Engine.Player.SteelAntiContract--;
					Engine.Status("A Steel Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.SteelAntiContract > 0) {
					Engine.Player.SteelAntiContract = 0;
					Engine.Status("All Steel Anti-Contracts broken!");
				}
			}
			
			//Mechanical Part
			Engine.Player.MechPart += Engine.Player.MechPartFact*4;
			Engine.Player.MechPart += Engine.Player.MechPartFactArm*12;
			Engine.Player.Money += Engine.Player.MechPartContract*400;
			
			Engine.Player.MechPart -= Engine.Player.MechPartContract*10;
			Engine.Player.MechPart -= Engine.Player.ACFact*10;
			Engine.Player.MechPart -= Engine.Player.ACFactArm*30;
			Engine.Player.MechPart -= Engine.Player.CarFact*10;
			Engine.Player.MechPart -= Engine.Player.CarFactArm*30;
			Engine.Player.MechPart -= Engine.Player.PlaneFact*70;
			
			Engine.Values.MechPartPS = Engine.Player.MechPartFact*4 + Engine.Player.MechPartFactArm*12 - Engine.Player.MechPartContract*10 - Engine.Player.ACFact*10 - Engine.Player.ACFactArm*30 - Engine.Player.CarFact*10 - Engine.Player.CarFactArm*30 - Engine.Player.PlaneFact*70;
			
			if (Engine.Values.MechPartPS < 0) {
				Engine.Player.MechPart += Engine.Player.MechPartAntiContract*10;
				Engine.Player.Money -= Engine.Player.MechPartAntiContract*400;
				while (Engine.Player.MechPart < 0) {
					if (Engine.Player.MechPartContract > 0) {
						Engine.Player.MechPart += Engine.Player.MechPartContract*10;
						Engine.BreakAMechPartContract();
						Engine.Player.MechPart -= Engine.Player.MechPartContract*10;
					} else {
					
					Engine.Player.MechPartAntiContract++;
					Engine.Player.MechPart += Engine.Player.MechPartAntiContract*10;
					Engine.Player.Money -= Engine.Player.MechPartAntiContract*400;
					Engine.Status("Ran out of Mechanical Parts! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.MechPartAntiContract > Math.ceil(Engine.Values.MechPartPS/-10)) {
					Engine.Player.MechPartAntiContract--;
					Engine.Status("A Mechanical Parts Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.MechPartAntiContract > 0) {
					Engine.Player.MechPartAntiContract = 0;
					Engine.Status("All Mechanical Parts Anti-Contracts broken!");
				}
			}
			
			//ConsPart
			Engine.Player.ConsPart += Engine.Player.ConsPartFact*5;
			Engine.Player.Money += Engine.Player.ConsPartContract*400;
			
			Engine.Player.ConsPart -= Engine.Player.ConsPartContract*10;
			
			Engine.Values.ConsPartPS = Engine.Player.ConsPartFact*5 - Engine.Player.ConsPartContract*10;
			
			if (Engine.Values.ConsPartPS < 0) {
				Engine.Player.ConsPart += Engine.Player.ConsPartAntiContract*10;
				Engine.Player.Money -= Engine.Player.ConsPartAntiContract*400;
				while (Engine.Player.ConsPart < 0) {
					if (Engine.Player.ConsPartContract > 0) {
						Engine.Player.ConsPart += Engine.Player.ConsPartContract*10;
						Engine.BreakAConsPartContract();
						Engine.Player.ConsPart -= Engine.Player.ConsPartContract*10;
					} else {
					
					Engine.Player.ConsPartAntiContract++;
					Engine.Player.ConsPart += Engine.Player.ConsPartAntiContract*10;
					Engine.Player.Money -= Engine.Player.ConsPartAntiContract*400;
					Engine.Status("Ran out of Construction Parts! Started an Anti-Contract!");
					}
				}
			} else {
				if (Engine.Player.ConsPartAntiContract > 0) {
					Engine.Player.ConsPartAntiContract = 0;
					Engine.Status("All Construction Part Anti-Contracts broken!");
				}
			}
			
			//AC Unit
			if (Engine.TwoSecondCounter > 1) {
				Engine.Player.AC += Engine.Player.ACFact*1;
				Engine.Player.AC += Engine.Player.ACFactArm*3;
			}
			Engine.Player.Money += Engine.Player.ACContract*Engine.Player.ACContractMoney;
			
			Engine.Player.AC -= Engine.Player.ACContract*1;
			
			Engine.Values.ACPS = Engine.Player.ACFact*0.5 + Engine.Player.ACFactArm*1.5 - Engine.Player.ACContract*1;
			
			if (Engine.Values.ACPS < 0) {
				Engine.Player.AC += Engine.Player.ACAntiContract*1;
				Engine.Player.Money -= Engine.Player.ACAntiContract*Engine.Player.ACContractMoney;
				while (Engine.Player.AC < 0) {
					if (Engine.Player.ACContract > 0) {
						Engine.Player.AC += Engine.Player.ACContract*1;
						Engine.BreakAACContract();
						Engine.Player.AC -= Engine.Player.ACContract*1;
					} else {
					
					Engine.Player.ACAntiContract++;
					Engine.Player.AC += Engine.Player.ACAntiContract*1;
					Engine.Player.Money -= Engine.Player.ACAntiContract*Engine.Player.ACContractMoney;
					Engine.Status("Ran out of A/C Units! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.ACAntiContract > Math.ceil(Engine.Values.ACPS/-10)) {
					Engine.Player.ACAntiContract--;
					Engine.Status("An A/C Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.ACAntiContract > 0) {
					Engine.Player.ACAntiContract = 0;
					Engine.Status("All A/C Unit Anti-Contracts broken!");
				}
			}
			
			
			//Copper
			
			Engine.Player.Copper += Engine.Player.CopperMine*5;
			Engine.Player.Copper += Engine.Player.CopperDrill*20;
			if (Engine.Player.GenCopper > 0) {
				Engine.Player.Copper += Engine.Player.GildedCopperMine*10;
				Engine.Player.Copper -= Engine.Player.GildedCRefinery*15;
			}
			Engine.Player.Money += Engine.Player.CopperContract*Engine.Player.CopperContractMoney;
			
			Engine.Player.Copper -= Engine.Player.CopperContract*10;
			Engine.Player.Copper -= Engine.Player.CRefinery*15;
			Engine.Player.Copper -= Engine.Player.CombCRefinery*30;
			
			if (Engine.Player.GenCopper > 0) {
				Engine.Values.CopperPS = Engine.Player.CopperMine*5 + Engine.Player.CopperDrill*20 + Engine.Player.GildedCopperMine*10 - Engine.Player.CopperContract*10 - Engine.Player.CRefinery*15 - Engine.Player.CombCRefinery*30 - Engine.Player.GildedCRefinery*15;
			} else {
				Engine.Values.CopperPS = Engine.Player.CopperMine*5 + Engine.Player.CopperDrill*20 - Engine.Player.CopperContract*10 - Engine.Player.CRefinery*15 - Engine.Player.CombCRefinery*30;
			}
						
			if (Engine.Values.CopperPS < 0) {
				Engine.Player.Copper += Engine.Player.CopperAntiContract*10;
				Engine.Player.Money -= Engine.Player.CopperAntiContract*Engine.Player.CopperContractMoney;
				while (Engine.Player.Copper < 0) {
					if (Engine.Player.CopperContract > 0) {
						Engine.Player.Copper += Engine.Player.CopperContract*10;
						Engine.BreakACopperContract();
						Engine.Player.Copper -= Engine.Player.CopperContract*10;
					} else {
					
					Engine.Player.CopperAntiContract++;
					Engine.Player.Copper += Engine.Player.CopperAntiContract*10;
					Engine.Player.Money -= Engine.Player.CopperAntiContract*Engine.Player.CopperContractMoney;
					Engine.Status("Ran out of Copper! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.CopperAntiContract > Math.ceil(Engine.Values.CopperPS/-10)) {
					Engine.Player.CopperAntiContract--;
					Engine.Status("A Copper Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.CopperAntiContract > 0) {
					Engine.Player.CopperAntiContract = 0;
					Engine.Status("All Copper Anti-Contracts broken!");
				}
			}
			
			//Refined Copper
			Engine.Player.RefCopper += Engine.Player.CRefinery*10;
			Engine.Player.RefCopper += Engine.Player.CombCRefinery*30;
			if (Engine.Player.GenCopper > 0) {
				Engine.Player.RefCopper += Engine.Player.GildedCRefinery*10;
			}
			Engine.Player.Money += Engine.Player.RefCopperContract*Engine.Player.RefCopperContractMoney;
			
			Engine.Player.RefCopper -= Engine.Player.RefCopperContract*10;
			Engine.Player.RefCopper -= Engine.Player.Spooler*50;	
			Engine.Player.RefCopper -= Engine.Player.SpoolerArm*150;	
			Engine.Player.RefCopper -= Engine.Player.MechPartFact*5;	
			Engine.Player.RefCopper -= Engine.Player.MechPartFactArm*15;		
			Engine.Player.RefCopper -= Engine.Player.ConsPartFact*20;
			
			if (Engine.Player.GenCopper > 0) {
				Engine.Values.RefCopperPS = Engine.Player.CRefinery*10 + Engine.Player.CombCRefinery*30 + Engine.Player.GildedCRefinery*10 - Engine.Player.RefCopperContract*10 - Engine.Player.Spooler*50 - Engine.Player.SpoolerArm*150 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*20;
			} else {
				Engine.Values.RefCopperPS = Engine.Player.CRefinery*10 + Engine.Player.CombCRefinery*30 - Engine.Player.RefCopperContract*10 - Engine.Player.Spooler*50 - Engine.Player.SpoolerArm*150 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*20;
			}
			if (Engine.Values.RefCopperPS < 0) {
				Engine.Player.RefCopper += Engine.Player.RefCopperAntiContract*10;
				Engine.Player.Money -= Engine.Player.RefCopperAntiContract*Engine.Player.RefCopperContractMoney;
				while (Engine.Player.RefCopper < 0) {
					if (Engine.Player.RefCopperContract > 0) {
						Engine.Player.RefCopper += Engine.Player.RefCopperContract*10;
						Engine.BreakARefCopperContract();
						Engine.Player.RefCopper -= Engine.Player.RefCopperContract*10;
					} else {
					
					Engine.Player.RefCopperAntiContract++;
					Engine.Player.RefCopper += Engine.Player.RefCopperAntiContract*10;
					Engine.Player.Money -= Engine.Player.RefCopperAntiContract*Engine.Player.RefCopperContractMoney;
					Engine.Status("Ran out of Refined Copper! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.RefCopperAntiContract > Math.ceil(Engine.Values.RefCopperPS/-10)) {
					Engine.Player.RefCopperAntiContract--;
					Engine.Status("A Refined Copper Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.RefCopperAntiContract > 0) {
					Engine.Player.RefCopperAntiContract = 0;
					Engine.Status("All Refined Copper Anti-Contracts broken!");
				}
			}
			
			//Spool
			Engine.Player.Spool += Engine.Player.Spooler*10;
			Engine.Player.Spool += Engine.Player.SpoolerArm*30;
			Engine.Player.Money += Engine.Player.SpoolContract*Engine.Player.SpoolContractMoney;
			
			Engine.Player.Spool -= Engine.Player.SpoolContract*10;
			Engine.Player.Spool -= Engine.Player.ElecFact*2;
			Engine.Player.Spool -= Engine.Player.ElecFactArm*6;
			Engine.Player.Spool -= Engine.Player.ACFact*1;
			Engine.Player.Spool -= Engine.Player.ACFactArm*3;
			Engine.Player.Spool -= Engine.Player.LightbulbFact*1;
			Engine.Player.Spool -= Engine.Player.LightbulbFactArm*3;
			
			Engine.Values.SpoolPS = Engine.Player.Spooler*10 + Engine.Player.SpoolerArm*30 - Engine.Player.SpoolContract*10 - Engine.Player.ElecFact*2 - Engine.Player.ACFact*1 - Engine.Player.LightbulbFact*1 - Engine.Player.ElecFactArm*6 - Engine.Player.ACFactArm*3 - Engine.Player.LightbulbFactArm*6;
			
			if (Engine.Values.SpoolPS < 0) {
				Engine.Player.Spool += Engine.Player.SpoolAntiContract*10;
				Engine.Player.Money -= Engine.Player.SpoolAntiContract*Engine.Player.SpoolContractMoney;
				while (Engine.Player.Spool < 0) {
					if (Engine.Player.SpoolContract > 0) {
						Engine.Player.Spool += Engine.Player.SpoolContract*10;
						Engine.BreakASpoolContract();
						Engine.Player.Spool -= Engine.Player.SpoolContract*10;
					} else {
					
					Engine.Player.SpoolAntiContract++;
					Engine.Player.Spool += Engine.Player.SpoolAntiContract*10;
					Engine.Player.Money -= Engine.Player.SpoolAntiContract*Engine.Player.SpoolContractMoney;
					Engine.Status("Ran out of Spools! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.SpoolAntiContract > Math.ceil(Engine.Values.SpoolPS/-10)) {
					Engine.Player.SpoolAntiContract--;
					Engine.Status("A Spool Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.SpoolAntiContract > 0) {
					Engine.Player.SpoolAntiContract = 0;
					Engine.Status("All Spool Anti-Contracts broken!");
				}
			}
			
			//ElecFactory
			Engine.Player.Electronic += Engine.Player.ElecFact*5;
			Engine.Player.Electronic += Engine.Player.ElecFactArm*15;
			Engine.Player.Money += Engine.Player.ElecContract*Engine.Player.ElecContractMoney;
			
			Engine.Player.Electronic -= Engine.Player.ElecContract*10;
			Engine.Player.Electronic -= Engine.Player.CarFact*5;
			Engine.Player.Electronic -= Engine.Player.CarFactArm*15;
			Engine.Player.Electronic -= Engine.Player.PlaneFact*50;
			
			Engine.Values.ElectronicPS = Engine.Player.ElecFact*5 + Engine.Player.ElecFactArm*15 - Engine.Player.ElecContract*10 - Engine.Player.CarFact*5 - Engine.Player.CarFactArm*15 - Engine.Player.PlaneFact*50;
			
			if (Engine.Values.ElectronicPS < 0) {
				Engine.Player.Electronic += Engine.Player.ElecAntiContract*10;
				Engine.Player.Money -= Engine.Player.ElecAntiContract*Engine.Player.ElecContractMoney;
				while (Engine.Player.Electronic < 0) {
					if (Engine.Player.ElectronicContract > 0) {
						Engine.Player.Electronic += Engine.Player.ElecContract*10;
						Engine.BreakAElectronicContract();
						Engine.Player.Electronic -= Engine.Player.ElecContract*10;
					} else {
					
					Engine.Player.ElecAntiContract++;
					Engine.Player.Electronic += Engine.Player.ElecAntiContract*10;
					Engine.Player.Money -= Engine.Player.ElecAntiContract*Engine.Player.ElecContractMoney;
					Engine.Status("Ran out of Electronics! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.ElecAntiContract > Math.ceil(Engine.Values.ElectronicPS/-10)) {
					Engine.Player.ElecAntiContract--;
					Engine.Status("An Electronic Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.ElecAntiContract > 0) {
					Engine.Player.ElecAntiContract = 0;
					Engine.Status("All Electronic Anti-Contracts broken!");
				}
			}
			
			//Oil
			Engine.Player.Oil += Engine.Player.OilMine*10;
			if (Engine.Player.GenOil > 0) {
				Engine.Player.Oil += Engine.Player.GildedOilWell*20;
			}
			
			Engine.Player.Oil -= Engine.Player.PRefinery*12;
			Engine.Player.Oil -= Engine.Player.GRefinery*8;
			
			if (Engine.Player.GenOil > 0) {
				Engine.Player.Oil -= Engine.Player.GildedPRefinery*12;
				Engine.Player.Oil -= Engine.Player.GildedGRefinery*8;
			}
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.OilPS = Engine.Player.OilMine*10 + Engine.Player.GildedOilWell*20 - Engine.Player.GRefinery*8 - Engine.Player.PRefinery*12 - Engine.Player.GildedPRefinery*12 - Engine.Player.GildedGRefinery*8;
			} else {
				Engine.Values.OilPS = Engine.Player.OilMine*10 - Engine.Player.GRefinery*8 - Engine.Player.PRefinery*12;
			}
			if (Engine.Values.OilPS < 0) {
				Engine.Player.Oil += Engine.Player.OilAntiContract*10;
				Engine.Player.Money -= Engine.Player.OilAntiContract*75;
				while (Engine.Player.Oil < 0) {
					if (Engine.Player.OilContract > 0) {
						Engine.Player.Oil += Engine.Player.OilContract*10;
						Engine.BreakAOilContract();
						Engine.Player.Oil -= Engine.Player.OilContract*10;
					} else {
					
					Engine.Player.OilAntiContract++;
					Engine.Player.Oil += Engine.Player.OilAntiContract*10;
					Engine.Player.Money -= Engine.Player.OilAntiContract*75;
					Engine.Status("Ran out of Oil! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.OilAntiContract > Math.ceil(Engine.Values.OilPS/-10)) {
					Engine.Player.OilAntiContract--;
					Engine.Status("An Oil Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.OilAntiContract > 0) {
					Engine.Player.OilAntiContract = 0;
					Engine.Status("All Oil Anti-Contracts broken!");
				}
			}
			
			//Gas
			Engine.Player.Gas += Engine.Player.GRefinery*4;
			if (Engine.Player.GenOil > 0) {
				Engine.Player.Gas += Engine.Player.GildedGRefinery*4;
			}
			Engine.Player.Money += Engine.Player.GasContract*Engine.Player.GasContractMoney;
			
			Engine.Player.Gas -= Engine.Player.GasContract*10;
			Engine.Player.Gas -= Engine.Player.IronDrill;
			Engine.Player.Gas -= Engine.Player.CoalDrill;
			Engine.Player.Gas -= Engine.Player.CopperDrill;
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.GasPS = Engine.Player.GRefinery*4 + Engine.Player.GildedGRefinery*4 - Engine.Player.GasContract*10 - Engine.Player.IronDrill - Engine.Player.CoalDrill - Engine.Player.CopperDrill;
			} else {	
				Engine.Values.GasPS = Engine.Player.GRefinery*4 - Engine.Player.GasContract*10 - Engine.Player.IronDrill - Engine.Player.CoalDrill - Engine.Player.CopperDrill;
			}
			if (Engine.Values.GasPS < 0) {
				Engine.Player.Gas += Engine.Player.GasAntiContract*10;
				Engine.Player.Money -= Engine.Player.GasAntiContract*Engine.Player.GasContractMoney;
				while (Engine.Player.Gas < 0) {
					if (Engine.Player.GasContract > 0) {
						Engine.Player.Gas += Engine.Player.GasContract*10;
						Engine.BreakAGasContract();
						Engine.Player.Gas -= Engine.Player.GasContract*10;
					} else {
					
					Engine.Player.GasAntiContract++;
					Engine.Player.Gas += Engine.Player.GasAntiContract*10;
					Engine.Player.Money -= Engine.Player.GasAntiContract*Engine.Player.GasContractMoney;
					Engine.Status("Ran out of Gas! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.GasAntiContract > Math.ceil(Engine.Values.GasPS/-10)) {
					Engine.Player.GasAntiContract--;
					Engine.Status("A Gas Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.GasAntiContract > 0) {
					Engine.Player.GasAntiContract = 0;
					Engine.Status("All Gas Anti-Contracts broken!");
				}
			}
			
			
			
			//Plastic
			Engine.Player.Plastic += Engine.Player.PRefinery*4;
			if (Engine.Player.GenOil > 0) {
				Engine.Player.Plastic += Engine.Player.GildedPRefinery*4;
			}
			Engine.Player.Money += Engine.Player.PlasticContract*Engine.Player.PlasticContractMoney;
			
			Engine.Player.Plastic -= Engine.Player.PlasticContract*10;
			Engine.Player.Plastic -= Engine.Player.ElecFact*10;
			Engine.Player.Plastic -= Engine.Player.ElecFactArm*30;
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.PlasticPS = Engine.Player.PRefinery*4 + Engine.Player.GildedPRefinery*4 - Engine.Player.PlasticContract*10 - Engine.Player.ElecFact*10 - Engine.Player.ElecFactArm*30;
			} else {
				Engine.Values.PlasticPS = Engine.Player.PRefinery*4 - Engine.Player.PlasticContract*10 - Engine.Player.ElecFact*10 - Engine.Player.ElecFactArm*30;
			}			
			if (Engine.Values.PlasticPS < 0) {
				Engine.Player.Plastic += Engine.Player.PlasticAntiContract*10;
				Engine.Player.Money -= Engine.Player.PlasticAntiContract*Engine.Player.PlasticContractMoney;
				while (Engine.Player.Plastic < 0) {
					if (Engine.Player.PlasticContract > 0) {
						Engine.Player.Plastic += Engine.Player.PlasticContract*10;
						Engine.BreakAPlasticContract();
						Engine.Player.Plastic -= Engine.Player.PlasticContract*10;
					} else {
					
					Engine.Player.PlasticAntiContract++;
					Engine.Player.Plastic += Engine.Player.PlasticAntiContract*10;
					Engine.Player.Money -= Engine.Player.PlasticAntiContract*Engine.Player.PlasticContractMoney;
					Engine.Status("Ran out of Plastic! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.PlasticAntiContract > Math.ceil(Engine.Values.PlasticPS/-10)) {
					Engine.Player.PlasticAntiContract--;
					Engine.Status("A Plastic Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.PlasticAntiContract > 0) {
					Engine.Player.PlasticAntiContract = 0;
					Engine.Status("All Plastic Anti-Contracts broken!");
				}
			}
			
			//Sand
			Engine.Player.Sand += Engine.Player.Shifter*5;
			
			Engine.Player.Sand -= Engine.Player.GlassFurnace*15;
			
			Engine.Values.SandPS = Engine.Player.Shifter*5 - Engine.Player.GlassFurnace*15;
						
			if (Engine.Values.SandPS < 0) {
				Engine.Player.Sand += Engine.Player.SandAntiContract*10;
				Engine.Player.Money -= Engine.Player.SandAntiContract*600;
				while (Engine.Player.Sand < 0) {
					if (Engine.Player.SandContract > 0) {
						Engine.Player.Sand += Engine.Player.SandContract*10;
						Engine.BreakASandContract();
						Engine.Player.Sand -= Engine.Player.SandContract*10;
					} else {
					
					Engine.Player.SandAntiContract++;
					Engine.Player.Sand += Engine.Player.SandAntiContract*10;
					Engine.Player.Money -= Engine.Player.SandAntiContract*600;
					Engine.Status("Ran out of Sand! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.SandAntiContract > Math.ceil(Engine.Values.SandPS/-10)) {
					Engine.Player.SandAntiContract--;
					Engine.Status("A Sand Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.SandAntiContract > 0) {
					Engine.Player.SandAntiContract = 0;
					Engine.Status("All Sand Anti-Contracts broken!");
				}
			}
			
			//Glass
			Engine.Player.Glass += Engine.Player.GlassFurnace*5;
			Engine.Player.Money += Engine.Player.GlassContract*Engine.Player.GlassContractMoney;
			
			Engine.Player.Glass -= Engine.Player.GlassContract*10;
			Engine.Player.Glass -= Engine.Player.LightbulbFact*10;
			Engine.Player.Glass -= Engine.Player.LightbulbFactArm*30;
			Engine.Player.Glass -= Engine.Player.CarFact*5;
			Engine.Player.Glass -= Engine.Player.CarFactArm*15;
			Engine.Player.Glass -= Engine.Player.PlaneFact*20;
			
			Engine.Values.GlassPS = Engine.Player.GlassFurnace*5 - Engine.Player.GlassContract*10 - Engine.Player.LightbulbFact*10 - Engine.Player.LightbulbFactArm*30 - Engine.Player.CarFact*5 - Engine.Player.CarFactArm*15 - Engine.Player.PlaneFact*20;
						
			if (Engine.Values.GlassPS < 0) {
				Engine.Player.Glass += Engine.Player.GlassAntiContract*10;
				Engine.Player.Money -= Engine.Player.GlassAntiContract*Engine.Player.GlassContractMoney;
				while (Engine.Player.Glass < 0) {
					if (Engine.Player.GlassContract > 0) {
						Engine.Player.Glass += Engine.Player.GlassContract*10;
						Engine.BreakAGlassContract();
						Engine.Player.Glass -= Engine.Player.GlassContract*10;
					} else {
					
					Engine.Player.GlassAntiContract++;
					Engine.Player.Glass += Engine.Player.GlassAntiContract*10;
					Engine.Player.Money -= Engine.Player.GlassAntiContract*Engine.Player.GlassContractMoney;
					Engine.Status("Ran out of Glass! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.GlassAntiContract > Math.ceil(Engine.Values.GlassPS/-10)) {
					Engine.Player.GlassAntiContract--;
					Engine.Status("A Glass Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.GlassAntiContract > 0) {
					Engine.Player.GlassAntiContract = 0;
					Engine.Status("All Glass Anti-Contracts broken!");
				}
			}
			
			//LightbulbFactory
			Engine.Player.Lightbulb += Engine.Player.LightbulbFact*10;
			Engine.Player.Lightbulb += Engine.Player.LightbulbFactArm*30;
			Engine.Player.Money += Engine.Player.LightbulbContract*Engine.Player.LightbulbContractMoney;
			
			Engine.Player.Lightbulb -= Engine.Player.LightbulbContract*10;
			
			Engine.Values.LightbulbPS = Engine.Player.LightbulbFact*10 + Engine.Player.LightbulbFactArm*30 - Engine.Player.LightbulbContract*10;
			
			if (Engine.Values.LightbulbPS < 0) {
				Engine.Player.Lightbulb += Engine.Player.LightbulbAntiContract*10;
				Engine.Player.Money -= Engine.Player.LightbulbAntiContract*Engine.Player.LightbulbContractMoney;
				while (Engine.Player.Lightbulb < 0) {
					if (Engine.Player.LightbulbContract > 0) {
						Engine.Player.Lightbulb += Engine.Player.LightbulbContract*10;
						Engine.BreakALightbulbContract();
						Engine.Player.Lightbulb -= Engine.Player.LightbulbContract*10;
					} else {
					
					Engine.Player.LightbulbAntiContract++;
					Engine.Player.Lightbulb += Engine.Player.LightbulbAntiContract*10;
					Engine.Player.Money -= Engine.Player.LightbulbAntiContract*Engine.Player.LightbulbContractMoney;
					Engine.Status("Ran out of Lightbulbs! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.LightbulbAntiContract > Math.ceil(Engine.Values.LightbulbPS/-10)) {
					Engine.Player.LightbulbAntiContract--;
					Engine.Status("A Lightbulb Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.LightbulbAntiContract > 0) {
					Engine.Player.LightbulbAntiContract = 0;
					Engine.Status("All Lightbulb Anti-Contracts broken!");
				}
			}
			
			
			//Power
			Engine.Player.MWh = Engine.Player.CoalPlant*40 + Engine.Player.SolarPlant*5 + Engine.Player.SolarRoad*10 + Engine.Player.NuclearPlant*125 - (Engine.Player.IRefinery + Engine.Player.SRefinery + Engine.Player.CRefinery + Engine.Player.CombIRefinery + Engine.Player.CombSRefinery + Engine.Player.CombCRefinery + Engine.Player.GRefinery + Engine.Player.PRefinery)*1 - (Engine.Player.MotorFact + Engine.Player.MechPartFact + Engine.Player.ConsPartFact + Engine.Player.Spooler + Engine.Player.ElecFact + Engine.Player.LightbulbFact + Engine.Player.ACFact + Engine.Player.CarFact)*3 - (Engine.Player.MotorFactArm + Engine.Player.MechPartFactArm + Engine.Player.SpoolerArm + Engine.Player.ElecFactArm + Engine.Player.LightbulbFactArm + Engine.Player.ACFactArm + Engine.Player.CarFactArm)*15 - (Engine.Player.Shifter + Engine.Player.Workshop + Engine.Player.Apartment + Engine.Player.Office + Engine.Player.Dealership)*2;
			
			Engine.Values.MWhMoney = Math.round(Engine.Player.MWh*Engine.Player.MWhCost);
			
			Engine.Player.Money += Math.round(Engine.Player.MWh*Engine.Player.MWhCost);
			
			
			Engine.Display.Money.innerHTML = Engine.Player.Money;
			Engine.Display.MoneyPS.innerHTML = Engine.Values.MoneyPS;
			
			//Iron
			Engine.Display.Iron.innerHTML = Engine.Player.Iron;
			Engine.Display.IronMine.innerHTML = Engine.Player.IronMine;
			Engine.Display.IronMineCost.innerHTML = Engine.Player.IronMineCost;
			
			Engine.Display.IronDrill.innerHTML = Engine.Player.IronDrill;
			
			Engine.Display.IronContract.innerHTML = Engine.Player.IronContract;
			Engine.Display.IronContractCost.innerHTML = Engine.Player.IronContractCost;
			
			Engine.Display.IronAntiContract.innerHTML = Engine.Player.IronAntiContract;
			
			Engine.Display.IronPS.innerHTML = Engine.Values.IronPS;
			
			//RefIron
			Engine.Display.RefIron.innerHTML = Engine.Player.RefIron;
			Engine.Display.IRefinery.innerHTML = Engine.Player.IRefinery;
			Engine.Display.IRefineryCost.innerHTML = Engine.Player.IRefineryCost;
			
			Engine.Display.CombIRefinery.innerHTML = Engine.Player.CombIRefinery;
			
			Engine.Display.RefIronContract.innerHTML = Engine.Player.RefIronContract;
			Engine.Display.RefIronContractCost.innerHTML = Engine.Player.RefIronContractCost;
			
			Engine.Display.RefIronAntiContract.innerHTML = Engine.Player.RefIronAntiContract;
			
			Engine.Display.RefIronPS.innerHTML = Engine.Values.RefIronPS;
			
			//Motor
			Engine.Display.Motor.innerHTML = Engine.Player.Motor;
			Engine.Display.MotorFact.innerHTML = Engine.Player.MotorFact;
			Engine.Display.MotorFactArm.innerHTML = Engine.Player.MotorFactArm;
			Engine.Display.MotorFactCost.innerHTML = Engine.Player.MotorFactCost;
			
			Engine.Display.MotorContract.innerHTML = Engine.Player.MotorContract;
			Engine.Display.MotorContractCost.innerHTML = Engine.Player.MotorContractCost;
			
			Engine.Display.MotorAntiContract.innerHTML = Engine.Player.MotorAntiContract;
			
			Engine.Display.MotorPS.innerHTML = Engine.Values.MotorPS;
			
			//Car
			Engine.Display.Car.innerHTML = Engine.Player.Car;
			Engine.Display.CarFact.innerHTML = Engine.Player.CarFact;
			Engine.Display.CarFactArm.innerHTML = Engine.Player.CarFactArm;
			Engine.Display.CarFactCost.innerHTML = Engine.Player.CarFactCost;
			
			Engine.Display.CarContract.innerHTML = Engine.Player.CarContract;
			Engine.Display.CarContractCost.innerHTML = Engine.Player.CarContractCost;
			
			Engine.Display.CarAntiContract.innerHTML = Engine.Player.CarAntiContract;
			
			Engine.Display.CarPS.innerHTML = Engine.Values.CarPS;
			
			//Plane
			Engine.Display.Plane.innerHTML = Engine.Player.Plane;
			Engine.Display.PlaneFact.innerHTML = Engine.Player.PlaneFact;
			Engine.Display.PlaneFactCost.innerHTML = Engine.Player.PlaneFactCost;
			Engine.Display.ThirtySecondCounter.innerHTML = ((30 - Engine.Player.GildedEngineer) - Engine.Player.ThirtySecondCounter);
			
			Engine.Display.PlanePS.innerHTML = Engine.Values.PlanePS;
			
			//Coal
			Engine.Display.Coal.innerHTML = Engine.Player.Coal;
			Engine.Display.CoalMine.innerHTML = Engine.Player.CoalMine;
			Engine.Display.CoalMineCost.innerHTML = Engine.Player.CoalMineCost;
			
			Engine.Display.CoalDrill.innerHTML = Engine.Player.CoalDrill;
			
			Engine.Display.CoalContract.innerHTML = Engine.Player.CoalContract;
			Engine.Display.CoalContractCost.innerHTML = Engine.Player.CoalContractCost;
			
			Engine.Display.CoalAntiContract.innerHTML = Engine.Player.CoalAntiContract;
			
			Engine.Display.CoalPS.innerHTML = Engine.Values.CoalPS;
			Engine.Display.CoalContractCoal.innerHTML = Engine.Values.CoalContractCoal;
			Engine.Display.CoalContractMoney.innerHTML = Engine.Values.CoalContractMoney;
			
			//Steel
			Engine.Display.Steel.innerHTML = Engine.Player.Steel;
			Engine.Display.SRefinery.innerHTML = Engine.Player.SRefinery;
			Engine.Display.SRefineryCost.innerHTML = Engine.Player.SRefineryCost;
			
			Engine.Display.CombSRefinery.innerHTML = Engine.Player.CombSRefinery;
			
			Engine.Display.SteelContract.innerHTML = Engine.Player.SteelContract;
			Engine.Display.SteelContractCost.innerHTML = Engine.Player.SteelContractCost;
			
			Engine.Display.SteelAntiContract.innerHTML = Engine.Player.SteelAntiContract;
			
			Engine.Display.SteelPS.innerHTML = Engine.Values.SteelPS;
			Engine.Display.SteelContractSteel.innerHTML = Engine.Values.SteelContractSteel;
			Engine.Display.SteelContractMoney.innerHTML = Engine.Values.SteelContractMoney;
			
			//MechPart
			Engine.Display.MechPart.innerHTML = Engine.Player.MechPart;
			Engine.Display.MechPartFact.innerHTML = Engine.Player.MechPartFact;
			Engine.Display.MechPartFactArm.innerHTML = Engine.Player.MechPartFactArm;
			Engine.Display.MechPartFactCost.innerHTML = Engine.Player.MechPartFactCost;
			
			Engine.Display.MechPartAntiContract.innerHTML = Engine.Player.MechPartAntiContract;
			
			Engine.Display.MechPartPS.innerHTML = Engine.Values.MechPartPS;
			
			//ConsPart
			Engine.Display.ConsPart.innerHTML = Engine.Player.ConsPart;
			Engine.Display.ConsPartFact.innerHTML = Engine.Player.ConsPartFact;
			Engine.Display.ConsPartFactCost.innerHTML = Engine.Player.ConsPartFactCost;
			
			Engine.Display.ConsPartAntiContract.innerHTML = Engine.Player.ConsPartAntiContract;
			
			Engine.Display.ConsPartPS.innerHTML = Engine.Values.ConsPartPS;
			
			//AC
			Engine.Display.AC.innerHTML = Engine.Player.AC;
			Engine.Display.ACFact.innerHTML = Engine.Player.ACFact;
			Engine.Display.ACFactCost.innerHTML = Engine.Player.ACFactCost;
			
			Engine.Display.ACFactArm.innerHTML = Engine.Player.ACFactArm;
			
			Engine.Display.ACContract.innerHTML = Engine.Player.ACContract;
			Engine.Display.ACContractCost.innerHTML = Engine.Player.ACContractCost;
			
			Engine.Display.ACAntiContract.innerHTML = Engine.Player.ACAntiContract;
			
			Engine.Display.ACPS.innerHTML = Engine.Values.ACPS;
			Engine.Display.ACContractAC.innerHTML = Engine.Values.ACContractAC;
			Engine.Display.ACContractMoney.innerHTML = Engine.Values.ACContractMoney;
			
			//Copper
			Engine.Display.Copper.innerHTML = Engine.Player.Copper;
			Engine.Display.CopperMine.innerHTML = Engine.Player.CopperMine;
			Engine.Display.CopperMineCost.innerHTML = Engine.Player.CopperMineCost;
			
			Engine.Display.CopperDrill.innerHTML = Engine.Player.CopperDrill;
			
			Engine.Display.CopperContract.innerHTML = Engine.Player.CopperContract;
			Engine.Display.CopperContractCost.innerHTML = Engine.Player.CopperContractCost;
			
			Engine.Display.CopperAntiContract.innerHTML = Engine.Player.CopperAntiContract;
			
			Engine.Display.CopperPS.innerHTML = Engine.Values.CopperPS;
			Engine.Display.CopperContractCopper.innerHTML = Engine.Values.CopperContractCopper;
			Engine.Display.CopperContractMoney.innerHTML = Engine.Values.CopperContractMoney;
			
			//RefCopper
			Engine.Display.RefCopper.innerHTML = Engine.Player.RefCopper;
			Engine.Display.CRefinery.innerHTML = Engine.Player.CRefinery;
			Engine.Display.CRefineryCost.innerHTML = Engine.Player.CRefineryCost;
			
			Engine.Display.CombCRefinery.innerHTML = Engine.Player.CombCRefinery;
			
			Engine.Display.RefCopperContract.innerHTML = Engine.Player.RefCopperContract;
			Engine.Display.RefCopperContractCost.innerHTML = Engine.Player.RefCopperContractCost;
			
			Engine.Display.RefCopperAntiContract.innerHTML = Engine.Player.RefCopperAntiContract;
			
			Engine.Display.RefCopperPS.innerHTML = Engine.Values.RefCopperPS;
			Engine.Display.RefCopperContractRefCopper.innerHTML = Engine.Values.RefCopperContractRefCopper;
			Engine.Display.RefCopperContractMoney.innerHTML = Engine.Values.RefCopperContractMoney;
			
			//Spool
			Engine.Display.Spool.innerHTML = Engine.Player.Spool;
			Engine.Display.Spooler.innerHTML = Engine.Player.Spooler;
			Engine.Display.SpoolerCost.innerHTML = Engine.Player.SpoolerCost;
			
			Engine.Display.SpoolerArm.innerHTML = Engine.Player.SpoolerArm;
			
			Engine.Display.SpoolContract.innerHTML = Engine.Player.SpoolContract;
			Engine.Display.SpoolContractCost.innerHTML = Engine.Player.SpoolContractCost;
			
			Engine.Display.SpoolAntiContract.innerHTML = Engine.Player.SpoolAntiContract;
			
			Engine.Display.SpoolPS.innerHTML = Engine.Values.SpoolPS;
			Engine.Display.SpoolContractSpool.innerHTML = Engine.Values.SpoolContractSpool;
			Engine.Display.SpoolContractMoney.innerHTML = Engine.Values.SpoolContractMoney;
			
			//Electronic
			Engine.Display.Electronic.innerHTML = Engine.Player.Electronic;
			Engine.Display.ElecFact.innerHTML = Engine.Player.ElecFact;
			Engine.Display.ElecFactCost.innerHTML = Engine.Player.ElecFactCost;
			
			Engine.Display.ElecFactArm.innerHTML = Engine.Player.ElecFactArm;
			
			Engine.Display.ElecContract.innerHTML = Engine.Player.ElecContract;
			Engine.Display.ElecContractCost.innerHTML = Engine.Player.ElecContractCost;
			
			Engine.Display.ElecAntiContract.innerHTML = Engine.Player.ElecAntiContract;
			
			Engine.Display.ElectronicPS.innerHTML = Engine.Values.ElectronicPS;
			Engine.Display.ElecContractElec.innerHTML = Engine.Values.ElecContractElec;
			Engine.Display.ElecContractMoney.innerHTML = Engine.Values.ElecContractMoney;
			
			/*
			-----
			Oils
			----
			*/
			
			
			//Oil
			Engine.Display.Oil.innerHTML = Engine.Player.Oil;
			Engine.Display.OilMine.innerHTML = Engine.Player.OilMine;
			Engine.Display.OilMineCost.innerHTML = Engine.Player.OilMineCost;
			
			Engine.Display.OilAntiContract.innerHTML = Engine.Player.OilAntiContract;
			
			Engine.Display.OilPS.innerHTML = Engine.Values.OilPS;
			
			//Gas
			Engine.Display.Gas.innerHTML = Engine.Player.Gas;
			Engine.Display.GRefinery.innerHTML = Engine.Player.GRefinery;
			Engine.Display.GRefineryCost.innerHTML = Engine.Player.GRefineryCost;
			
			Engine.Display.GasContract.innerHTML = Engine.Player.GasContract;
			Engine.Display.GasContractCost.innerHTML = Engine.Player.GasContractCost;
			
			Engine.Display.GasAntiContract.innerHTML = Engine.Player.GasAntiContract;
			
			Engine.Display.GasPS.innerHTML = Engine.Values.GasPS;
			Engine.Display.GasContractGas.innerHTML = Engine.Values.GasContractGas;
			Engine.Display.GasContractMoney.innerHTML = Engine.Values.GasContractMoney;
			
			//Plastic
			Engine.Display.Plastic.innerHTML = Engine.Player.Plastic;
			Engine.Display.PRefinery.innerHTML = Engine.Player.PRefinery;
			Engine.Display.PRefineryCost.innerHTML = Engine.Player.PRefineryCost;
			
			Engine.Display.PlasticContract.innerHTML = Engine.Player.PlasticContract;
			Engine.Display.PlasticContractCost.innerHTML = Engine.Player.PlasticContractCost;
			
			Engine.Display.PlasticPS.innerHTML = Engine.Values.PlasticPS;
			Engine.Display.PlasticContractPlastic.innerHTML = Engine.Values.PlasticContractPlastic;
			Engine.Display.PlasticContractMoney.innerHTML = Engine.Values.PlasticContractMoney;
			
			Engine.Display.PlasticAntiContract.innerHTML = Engine.Player.PlasticAntiContract;
			
			/*
			-----
			Sand
			----
			*/
			
			
			//Sand
			Engine.Display.Sand.innerHTML = Engine.Player.Sand;
			Engine.Display.Shifter.innerHTML = Engine.Player.Shifter;
			Engine.Display.ShifterMotorCost.innerHTML = Engine.Player.ShifterMotorCost;
			Engine.Display.ShifterMechCost.innerHTML = Engine.Player.ShifterMechCost;
			
			Engine.Display.SandAntiContract.innerHTML = Engine.Player.SandAntiContract;
			
			Engine.Display.SandPS.innerHTML = Engine.Values.SandPS;
			
			
			//Glass
			Engine.Display.Glass.innerHTML = Engine.Player.Glass;
			Engine.Display.GlassFurnace.innerHTML = Engine.Player.GlassFurnace;
			
			Engine.Display.GlassContract.innerHTML = Engine.Player.GlassContract;
			Engine.Display.GlassContractCost.innerHTML = Engine.Player.GlassContractCost;
			Engine.Display.GlassAntiContract.innerHTML = Engine.Player.GlassAntiContract;
			
			Engine.Display.GlassPS.innerHTML = Engine.Values.GlassPS;
			
			//Lightbulb
			Engine.Display.Lightbulb.innerHTML = Engine.Player.Lightbulb;
			Engine.Display.LightbulbFact.innerHTML = Engine.Player.LightbulbFact;
			Engine.Display.LightbulbFactCost.innerHTML = Engine.Player.LightbulbFactCost;
			
			Engine.Display.LightbulbFactArm.innerHTML = Engine.Player.LightbulbFactArm;
			
			Engine.Display.LightbulbContract.innerHTML = Engine.Player.LightbulbContract;
			Engine.Display.LightbulbContractCost.innerHTML = Engine.Player.LightbulbContractCost;
			
			Engine.Display.LightbulbAntiContract.innerHTML = Engine.Player.LightbulbAntiContract;
			
			Engine.Display.LightbulbPS.innerHTML = Engine.Values.LightbulbPS;
			Engine.Display.LightbulbContractLightbulb.innerHTML = Engine.Values.LightbulbContractLightbulb;
			Engine.Display.LightbulbContractMoney.innerHTML = Engine.Values.LightbulbContractMoney;
			
			
			
			/*
			-----
			Factory
			----
			*/
			
			Engine.Display.Drill.innerHTML = Engine.Player.Drill;
			Engine.Display.DrillMotorCost.innerHTML = Engine.Player.DrillMotorCost;
			Engine.Display.DrillMechCost.innerHTML = Engine.Player.DrillMechCost;
			
			Engine.Display.Furnace.innerHTML = Engine.Player.Furnace;
			Engine.Display.FurnaceCost.innerHTML = Engine.Player.FurnaceCost;
			
			Engine.Display.Arm.innerHTML = Engine.Player.Arm;
			Engine.Display.ArmMotorCost.innerHTML = Engine.Player.ArmMotorCost;
			Engine.Display.ArmMechCost.innerHTML = Engine.Player.ArmMechCost;
			Engine.Display.ArmElecCost.innerHTML = Engine.Player.ArmElecCost;
			
			Engine.Display.SolarArray.innerHTML = Engine.Player.SolarArray;
			Engine.Display.SolarArrayElecCost.innerHTML = Engine.Player.SolarArrayElecCost;
			Engine.Display.SolarArrayGlassCost.innerHTML = Engine.Player.SolarArrayGlassCost;
			
			
			
			/*
			-----
			Power
			----
			*/
			
			Engine.Display.MWh.innerHTML = Engine.Player.MWh;
			Engine.Display.MWhMoney.innerHTML = Engine.Values.MWhMoney;
			
			Engine.Display.MWhCost.innerHTML = Engine.Player.MWhCost;
			
			Engine.Display.PowerLine.innerHTML = Engine.Player.PowerLine;
			Engine.Display.PowerLineCost.innerHTML = Engine.Player.PowerLineCost;
			
			Engine.Display.CoalPlant.innerHTML = Engine.Player.CoalPlant;
			Engine.Display.CoalPlantCost.innerHTML = Engine.Player.CoalPlantCost;
			
			Engine.Display.SolarPlant.innerHTML = Engine.Player.SolarPlant;
			Engine.Display.SolarPlantCost.innerHTML = Engine.Player.SolarPlantCost;
			
			Engine.Display.NuclearPlant.innerHTML = Engine.Player.NuclearPlant;
			Engine.Display.NuclearPlantCost.innerHTML = Engine.Player.NuclearPlantCost;
			
			
			
			/*
			-----
			Buildings
			----
			*/
			//Engine.Display.ContractShift.innerHTML = Engine.Player.ContractShift;
			
			Engine.Display.Land.innerHTML = Engine.Player.Land;
			Engine.Display.LandCost.innerHTML = Engine.Player.LandCost;
			
			Engine.Display.Workshop.innerHTML = Engine.Player.Workshop;
			Engine.Display.WorkshopCost.innerHTML = Engine.Player.WorkshopCost;
			
			Engine.Display.Apartment.innerHTML = Engine.Player.Apartment;
			Engine.Display.ApartmentCost.innerHTML = Engine.Player.ApartmentCost;
			
			Engine.Display.Office.innerHTML = Engine.Player.Office;
			Engine.Display.OfficeCost.innerHTML = Engine.Player.OfficeCost;
			
			
			
			
			/*
			-----
			Cars
			----
			*/
			Engine.Display.Dealership.innerHTML = Engine.Player.Dealership;
			Engine.Display.DealershipCost.innerHTML = Engine.Player.DealershipCost;
			
			Engine.Display.Road.innerHTML = Engine.Player.Road;
			Engine.Display.SolarRoad.innerHTML = Engine.Player.SolarRoad;
			Engine.Display.SolarRoadCost.innerHTML = Engine.Player.SolarRoadCost;
			Engine.Display.CarDealerMoney.innerHTML = Engine.Player.CarDealerMoney;
			
			
			
			/*
			-----
			Planes
			----
			*/
			Engine.Display.PlaneLimit.innerHTML = Engine.Player.PlaneLimit;
			Engine.Display.AirportMoney.innerHTML = Engine.Player.AirportMoney;
			Engine.Display.Hanger.innerHTML = Engine.Player.Hanger;
			Engine.Display.HangerCost.innerHTML = Engine.Player.HangerCost;
			Engine.Display.Terminal.innerHTML = Engine.Player.Terminal;
			Engine.Display.TerminalCost.innerHTML = Engine.Player.TerminalCost;
			Engine.Display.GiftShop.innerHTML = Engine.Player.GiftShop;
			Engine.Display.GiftShopCost.innerHTML = Engine.Player.GiftShopCost;
			
			
			
			
			/*
			-----
			Construction Workings
			----
			*/
			Engine.Display.Permit.innerHTML = Engine.Player.Permit;
			Engine.Display.PermitCost.innerHTML = Engine.Player.PermitCost;
			Engine.Display.Warehouse.innerHTML = Engine.Player.Warehouse;
			Engine.Display.Skyscraper.innerHTML = Engine.Player.Skyscraper;
			
			
			Engine.Display.WarehouseConsPartCost.innerHTML = Engine.Player.WarehouseConsPartCost;
			Engine.Display.WarehouseGlassCost.innerHTML = Engine.Player.WarehouseGlassCost;
			Engine.Display.WarehouseACCost.innerHTML = Engine.Player.WarehouseACCost;
			Engine.Display.WarehouseSpoolCost.innerHTML = Engine.Player.WarehouseSpoolCost;
			Engine.Display.WarehouseLightbulbCost.innerHTML = Engine.Player.WarehouseLightbulbCost;
			
			
			Engine.Display.SkyscraperConsPartCost.innerHTML = Engine.Player.SkyscraperConsPartCost;
			Engine.Display.SkyscraperGlassCost.innerHTML = Engine.Player.SkyscraperGlassCost;
			Engine.Display.SkyscraperACCost.innerHTML = Engine.Player.SkyscraperACCost;
			Engine.Display.SkyscraperSpoolCost.innerHTML = Engine.Player.SkyscraperSpoolCost;
			Engine.Display.SkyscraperLightbulbCost.innerHTML = Engine.Player.SkyscraperLightbulbCost;
			
			if (Engine.Player.BuildTime > 0) {
				Engine.Player.BuildTime--;
				if (Engine.Player.BuildTime < 1) {
					if (Engine.Player.Building = 1) {
						Engine.Player.Building = 0;
						Engine.Player.Warehouse++;
					}
					if (Engine.Player.Building = 2) {
						Engine.Player.Building = 0;
						Engine.Player.Skyscraper++;
					}
				}
			} else {
			}
			
			Engine.Player.WarehouseBuildTime = Engine.Player.WarehouseBuildTimeBase/(1 + (Engine.Player.GildedForeman*0.2));
			Engine.Player.SkyscraperBuildTime = Engine.Player.SkyscraperBuildTimeBase/(1 + (Engine.Player.GildedForeman*0.2));
			
			
			
			Engine.Player.Money += Engine.Player.Warehouse*3000
			Engine.Player.Money += Engine.Player.Skyscraper*42500
			
			Engine.Display.WarehouseBuildTime.innerHTML = Engine.Player.WarehouseBuildTime;
			Engine.Display.SkyscraperBuildTime.innerHTML = Engine.Player.SkyscraperBuildTime;
			Engine.Display.BuildTime.innerHTML = Engine.Player.BuildTime;
			
			
			/*
			-----
			CRIME :O
			----
			*/
			
			Engine.Player.Weed += Engine.Player.WeedPlant;
			Engine.Player.Weed -= Engine.Player.WeedDealer*5;
			Engine.Player.Money += Engine.Player.WeedDealer*45;
			
			while (Engine.Player.Weed < 0) {
				Engine.Player.Weed += Engine.Player.WeedDealer*5;
				Engine.Player.WeedDealer--;
				Engine.Player.Weed -= Engine.Player.WeedDealer*5;
				Engine.Status("Ran out of Weed! Lost a Dealer!");
			}
			
			
			Engine.Values.WeedPS = Engine.Player.WeedPlant - Engine.Player.WeedDealer*5;
			
			Engine.Display.Weed.innerHTML = Engine.Player.Weed;
			Engine.Display.WeedPS.innerHTML = Engine.Values.WeedPS;
			Engine.Display.WeedPlant.innerHTML = Engine.Player.WeedPlant;
			Engine.Display.WeedPlantCost.innerHTML = Engine.Player.WeedPlantCost;
			Engine.Display.WeedDealer.innerHTML = Engine.Player.WeedDealer;
			Engine.Display.WeedDealerCost.innerHTML = Engine.Player.WeedDealerCost;
			
			
			
			/*
			-----
			Generation
			----
			*/
			
			//Engine.Display.Generations.innerHTML = Engine.Player.Generations;
			//Engine.Display.GenPoints.innerHTML = Engine.Player.GenPoints;
			Engine.Display.GenCost.innerHTML = Engine.Player.GenCost;
			
			
			
			
			timeDifference -= Engine.IdleSpeed;
			Engine.Ticks += Engine.IdleSpeed;
			
			
			Engine.Display.IronContractMoney.innerHTML = Engine.Player.IronContractMoney;
			Engine.Display.RefIronContractMoney.innerHTML = Engine.Player.RefIronContractMoney;
			Engine.Display.MotorContractMoney.innerHTML = Engine.Player.MotorContractMoney;
			Engine.Display.CarContractMoney.innerHTML = Engine.Player.CarContractMoney;
			
			Engine.Display.CoalContractMoney.innerHTML = Engine.Player.CoalContractMoney;
			Engine.Display.SteelContractMoney.innerHTML = Engine.Player.SteelContractMoney;
			Engine.Display.ACContractMoney.innerHTML = Engine.Player.ACContractMoney;
			
			Engine.Display.CopperContractMoney.innerHTML = Engine.Player.CopperContractMoney;
			Engine.Display.RefCopperContractMoney.innerHTML = Engine.Player.RefCopperContractMoney;
			Engine.Display.SpoolContractMoney.innerHTML = Engine.Player.SpoolContractMoney;
			Engine.Display.ElecContractMoney.innerHTML = Engine.Player.ElecContractMoney;
			
			Engine.Display.GasContractMoney.innerHTML = Engine.Player.GasContractMoney;
			Engine.Display.PlasticContractMoney.innerHTML = Engine.Player.PlasticContractMoney;
			
			Engine.Display.GlassContractMoney.innerHTML = Engine.Player.GlassContractMoney;
			Engine.Display.LightbulbContractMoney.innerHTML = Engine.Player.LightbulbContractMoney;
			
			
			// Value Change
			Engine.Values.MoneyPS = (Engine.Player.IronContract - Engine.Player.IronAntiContract)*Engine.Player.IronContractMoney + (Engine.Player.RefIronContract - Engine.Player.RefIronAntiContract)*Engine.Player.RefIronContractMoney + (Engine.Player.MechPartContract - Engine.Player.MechPartAntiContract)*400 + (Engine.Player.MotorContract - Engine.Player.MotorAntiContract)*Engine.Player.MotorContractMoney + (Engine.Player.CarContract - Engine.Player.CarAntiContract)*Engine.Player.CarContractMoney + (Engine.Player.CoalContract - Engine.Player.CoalAntiContract)*Engine.Player.CoalContractMoney + (Engine.Player.SteelContract - Engine.Player.SteelAntiContract)*Engine.Player.SteelContractMoney + (Engine.Player.ConsPartContract - Engine.Player.ConsPartAntiContract)*400 + (Engine.Player.ACContract - Engine.Player.ACAntiContract)*Engine.Player.ACContractMoney + (Engine.Player.CopperContract - Engine.Player.CopperAntiContract)*Engine.Player.CopperContractMoney + (Engine.Player.RefCopperContract - Engine.Player.RefCopperAntiContract)*Engine.Player.RefCopperContractMoney + (Engine.Player.SpoolContract - Engine.Player.SpoolAntiContract)*Engine.Player.SpoolContractMoney + (Engine.Player.ElecContract - Engine.Player.ElecAntiContract)*Engine.Player.ElecContractMoney + (0 - Engine.Player.OilAntiContract)*60 + Engine.Player.GasContract*Engine.Player.GasContractMoney + (Engine.Player.PlasticContract - Engine.Player.PlasticAntiContract)*Engine.Player.PlasticContractMoney + (0 - Engine.Player.SandAntiContract)*600 + (Engine.Player.GlassContract - Engine.Player.GlassAntiContract)*Engine.Player.GlassContractMoney + (Engine.Player.LightbulbContract - Engine.Player.LightbulbAntiContract)*Engine.Player.LightbulbContractMoney + Math.round(Engine.Player.MWh*Engine.Player.MWhCost) + Engine.Player.Dealership*Engine.Player.CarDealerMoney + Engine.Player.Plane*Engine.Player.AirportMoney + Engine.Player.Warehouse*3000 + Engine.Player.WeedDealer*45;
			
			
			Engine.Values.IronContractIron.innerHTML = Engine.Player.IronContract*10;
			Engine.Values.IronContractMoney.innerHTML = Engine.Player.IronContract*Engine.Player.IronContractMoney;
			
			Engine.Values.RefIronContractRefIron.innerHTML = Engine.Player.RefIronContract*10;
			Engine.Values.RefIronContractMoney.innerHTML = Engine.Player.RefIronContract*Engine.Player.RefIronContractMoney;
			
			Engine.Values.MechPartFactSteel = Engine.Player.MechPartFact*5;
			Engine.Values.MechPartFactRefCopper = Engine.Player.MechPartFact*5;
			Engine.Values.MechPartContractMechPart = Engine.Player.MechPartContract*10;
			
			Engine.Values.MotorFactRefIron = Engine.Player.MotorFact*10;
			Engine.Values.MotorFactSteel = Engine.Player.MotorFact*5;
			Engine.Values.MotorContractMotor.innerHTML = Engine.Player.MotorContract*1;
			Engine.Values.MotorContractMoney.innerHTML = Engine.Player.MotorContract*Engine.Player.MotorContractMoney;
			
			Engine.Values.CarFactMotor = Engine.Player.CarFact*2;
			Engine.Values.CarFactMechPart = Engine.Player.CarFact*10;
			Engine.Values.CarFactElec = Engine.Player.CarFact*5;
			Engine.Values.CarFactGlass = Engine.Player.CarFact*5;
			Engine.Values.CarContractCar.innerHTML = Engine.Player.CarContract*2;
			Engine.Values.CarContractMoney.innerHTML = Engine.Player.CarContract*Engine.Player.CarContractMoney;
			
			Engine.Values.PlaneFactMotor = Engine.Player.PlaneFact*10;
			Engine.Values.PlaneFactMechPart = Engine.Player.PlaneFact*70;
			Engine.Values.PlaneFactElec = Engine.Player.PlaneFact*50;
			Engine.Values.PlaneFactGlass = Engine.Player.PlaneFact*20;
			
			Engine.Values.CoalContractCoal.innerHTML = Engine.Player.CoalContract*10;
			
			Engine.Values.SRefineryIron = Engine.Player.SRefinery*10;
			Engine.Values.CombSRefineryIron = Engine.Player.CombSRefinery*30;
			Engine.Values.SRefineryCoal = Engine.Player.SRefinery*9;
			Engine.Values.CombSRefineryCoal = Engine.Player.CombSRefinery*27;
			Engine.Values.SteelContractSteel = Engine.Player.SteelContract*10;
			
			Engine.Values.ACFactMechPart = Engine.Player.ACFact*10;
			Engine.Values.ACFactMotor = Engine.Player.ACFact*2;
			Engine.Values.ACFactSpool = Engine.Player.ACFact*1;
			Engine.Values.ACContractAC = Engine.Player.ACContract*1;
			
			Engine.Values.CopperContractCopper = Engine.Player.CopperContract*10;
			
			Engine.Values.CRefineryCopper = Engine.Player.CRefinery*15;
			Engine.Values.CombCRefineryCopper = Engine.Player.CombCRefinery*30;
			Engine.Values.RefCopperContractRefCopper = Engine.Player.RefCopperContract*10;
			
			Engine.Values.SpoolerRefCopper = Engine.Player.Spooler*50;
			Engine.Values.SpoolContractSpool = Engine.Player.SpoolContract*10;
			
			
			Engine.Values.ElecFactSpool = Engine.Player.ElecFact*2;
			Engine.Values.ElecFactPlastic = Engine.Player.ElecFact*10;
			Engine.Values.ElecContractElec = Engine.Player.ElecContract*10;
			
			/*
			-------
			Oils
			-----
			*/
			
			Engine.Values.GRefineryGas = Engine.Player.GRefinery*4;
			Engine.Values.GRefineryOil = Engine.Player.GRefinery*8;
			Engine.Values.GasContractGas = Engine.Player.GasContract*10;
			Engine.Values.GasContractMoney = Engine.Player.GasContract*50;
			
			Engine.Values.PRefineryPlastic = Engine.Player.CRefinery*4;
			Engine.Values.PRefineryOil = Engine.Player.GRefinery*12;
			Engine.Values.PlasticContractPlastic = Engine.Player.PlasticContract*10;
			Engine.Values.PlasticContractMoney = Engine.Player.PlasticContract*75;
			
			//SAND
			
			Engine.Values.GlassFurnaceSand = Engine.Player.GlassFurnace*15;
			Engine.Values.GlassContractGlass = Engine.Player.GlassContract*10;
			Engine.Display.GlassContractGlass.innerHTML = Engine.Values.GlassContractGlass;
			
			
			Engine.Values.LightbulbFactSpool = Engine.Player.LightbulbFact*1;
			Engine.Values.LightbulbFactGlass = Engine.Player.LightbulbFact*10;
			Engine.Values.LightbulbContractLightbulb = Engine.Player.LightbulbContract*10;
			
			
			Engine.Values.GoldCoinGain = Math.floor(Engine.Player.Money/1000000);
			Engine.Display.GoldCoinGain.innerHTML = Engine.Values.GoldCoinGain;
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			
			
			
			/*
			----------
			GildedDisplay
			----------
			*/
			
			Engine.Display.GildedIronMine.innerHTML = Engine.Player.GildedIronMine;
			Engine.Display.GildedIronMineCost.innerHTML = Engine.Player.GildedIronMineCost;
					Engine.Display.GildedIRefinery.innerHTML = Engine.Player.GildedIRefinery;
					Engine.Display.GildedIRefineryCost.innerHTML = Engine.Player.GildedIRefineryCost;
					
			Engine.Display.GildedCoalMine.innerHTML = Engine.Player.GildedCoalMine;
			Engine.Display.GildedCoalMineCost.innerHTML = Engine.Player.GildedCoalMineCost;
					Engine.Display.GildedSRefinery.innerHTML = Engine.Player.GildedSRefinery;
					Engine.Display.GildedSRefineryCost.innerHTML = Engine.Player.GildedSRefineryCost;
					
			Engine.Display.GildedCopperMine.innerHTML = Engine.Player.GildedCopperMine;
			Engine.Display.GildedCopperMineCost.innerHTML = Engine.Player.GildedCopperMineCost;
					Engine.Display.GildedCRefinery.innerHTML = Engine.Player.GildedCRefinery;
					Engine.Display.GildedCRefineryCost.innerHTML = Engine.Player.GildedCRefineryCost;
					
			Engine.Display.GildedOilWell.innerHTML = Engine.Player.GildedOilWell;
			Engine.Display.GildedOilWellCost.innerHTML = Engine.Player.GildedOilWellCost;
					Engine.Display.GildedGRefinery.innerHTML = Engine.Player.GildedGRefinery;
					Engine.Display.GildedGRefineryCost.innerHTML = Engine.Player.GildedGRefineryCost;
					Engine.Display.GildedPRefinery.innerHTML = Engine.Player.GildedPRefinery;
					Engine.Display.GildedPRefineryCost.innerHTML = Engine.Player.GildedPRefineryCost;
					
			
			Engine.Display.GildedEngineer.innerHTML = Engine.Player.GildedEngineer;
			Engine.Display.GildedEngineerCost.innerHTML = Engine.Player.GildedEngineerCost;
			
			Engine.Display.GildedForeman.innerHTML = Engine.Player.GildedForeman;
			Engine.Display.GildedForemanCost.innerHTML = Engine.Player.GildedForemanCost;
			
			
			
			
			//==============Hidden Resources
			//==============
		
		
		
			if (Engine.Player.GoldCoin > 0) {
				document.getElementById("GoldCoinResource").className = "swMain";
			}
			
		
		
		
			if (Engine.Player.Iron > 0) {
				document.getElementById("IronResource").className = "swMain";
			}
			
			if (Engine.Player.IronAntiContract > 0) {
				document.getElementById("IronMark").className = "MarkVisible";
			}
			
			if (Engine.Player.IronAntiContract < 1) {
				document.getElementById("IronMark").className = "MarkInvisible";
			}
			
		
			if (Engine.Player.RefIron > 0) {
				document.getElementById("RefIronResource").className = "swMain";
			}
			
			if (Engine.Player.RefIronAntiContract > 0) {
				document.getElementById("RefIronMark").className = "MarkVisible";
			}
			
			if (Engine.Player.RefIronAntiContract < 1) {
				document.getElementById("RefIronMark").className = "MarkInvisible";
			}
			
		
			if (Engine.Player.Motor > 0) {
				document.getElementById("MotorResource").className = "swMain";
			}
			
			if (Engine.Player.MotorAntiContract > 0) {
				document.getElementById("MotorMark").className = "MarkVisible";
			}
			
			if (Engine.Player.MotorAntiContract < 1) {
				document.getElementById("MotorMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.Car > 0) {
				document.getElementById("CarResource").className = "swMain";
			}
			
			if (Engine.Player.CarAntiContract > 0) {
				document.getElementById("CarMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CarAntiContract < 1) {
				document.getElementById("CarMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.PlaneLimit > 0) {
				document.getElementById("PlaneResource").className = "swMain";
			}
			
			if (Engine.Player.PlaneAntiContract > 0) {
				document.getElementById("PlaneMark").className = "MarkVisible";
			}
			
			if (Engine.Player.PlaneAntiContract < 1) {
				document.getElementById("PlaneMark").className = "MarkInvisible";
			}
			
		
		
		
			if (Engine.Player.Coal > 0) {
				document.getElementById("CoalResource").className = "swMain";
			}
			
			if (Engine.Player.CoalAntiContract > 0) {
				document.getElementById("CoalMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CoalAntiContract < 1) {
				document.getElementById("CoalMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.Steel > 0) {
				document.getElementById("SteelResource").className = "swMain";
			}
			
			if (Engine.Player.SteelAntiContract > 0) {
				document.getElementById("SteelMark").className = "MarkVisible";
			}
			
			if (Engine.Player.SteelAntiContract < 1) {
				document.getElementById("SteelMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.MechPart > 0) {
				document.getElementById("MechPartResource").className = "swMain";
			}
			
			if (Engine.Player.MechPartAntiContract > 0) {
				document.getElementById("MechPartMark").className = "MarkVisible";
			}
			
			if (Engine.Player.MechPartAntiContract < 1) {
				document.getElementById("MechPartMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.AC > 0) {
				document.getElementById("ACResource").className = "swMain";
			}
			
			if (Engine.Player.ACAntiContract > 0) {
				document.getElementById("ACMark").className = "MarkVisible";
			}
			
			if (Engine.Player.ACAntiContract < 1) {
				document.getElementById("ACMark").className = "MarkInvisible";
			}
			
			
		
		
			if (Engine.Player.ConsPart > 0) {
				document.getElementById("ConsPartResource").className = "swMain";
			}
			
			if (Engine.Player.ConsPartAntiContrConsPartt > 0) {
				document.getElementById("ConsPartMark").className = "MarkVisible";
			}
			
			if (Engine.Player.ConsPartAntiContrConsPartt < 1) {
				document.getElementById("ConsPartMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.BuildTime > 0) {
				document.getElementById("BuildTimeResource").className = "swMain";
			}
			
		
			
		
			if (Engine.Player.Copper > 0) {
				document.getElementById("CopperResource").className = "swMain";
			}
			
			if (Engine.Player.CopperAntiContract > 0) {
				document.getElementById("CopperMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CopperAntiContract < 1) {
				document.getElementById("CopperMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.RefCopper > 0) {
				document.getElementById("RefCopperResource").className = "swMain";
			}
			
			if (Engine.Player.RefCopperAntiContract > 0) {
				document.getElementById("RefCopperMark").className = "MarkVisible";
			}
			
			if (Engine.Player.RefCopperAntiContract < 1) {
				document.getElementById("RefCopperMark").className = "MarkInvisible";
			}
			
		
			
			if (Engine.Player.Spool > 0) {
				document.getElementById("SpoolResource").className = "swMain";
			}
			
			if (Engine.Player.SpoolAntiContract > 0) {
				document.getElementById("SpoolMark").className = "MarkVisible";
			}
			
			if (Engine.Player.SpoolAntiContract < 1) {
				document.getElementById("SpoolMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.Electronic > 0) {
				document.getElementById("ElectronicResource").className = "swMain";
			}
			
			if (Engine.Player.ElecAntiContract > 0) {
				document.getElementById("ElecMark").className = "MarkVisible";
			}
			
			if (Engine.Player.ElecAntiContract < 1) {
				document.getElementById("ElecMark").className = "MarkInvisible";
			}
			
		
		
			
		
			if (Engine.Player.Oil > 0) {
				document.getElementById("OilResource").className = "swMain";
			}
			
			if (Engine.Player.OilAntiContract > 0) {
				document.getElementById("OilMark").className = "MarkVisible";
			}
			
			if (Engine.Player.OilAntiContract < 1) {
				document.getElementById("OilMark").className = "MarkInvisible";
			}
			
		
		
			if (Engine.Player.Gas > 0) {
				document.getElementById("GasResource").className = "swMain";
			}
			
			if (Engine.Player.GasAntiContract > 0) {
				document.getElementById("GasMark").className = "MarkVisible";
			}
			
			if (Engine.Player.GasAntiContract < 1) {
				document.getElementById("GasMark").className = "MarkInvisible";
			}
			
		
			
			if (Engine.Player.Plastic > 0) {
				document.getElementById("PlasticResource").className = "swMain";
			}
			
			if (Engine.Player.PlasticAntiContract > 0) {
				document.getElementById("PlasticMark").className = "MarkVisible";
			}
			
			if (Engine.Player.PlasticAntiContract < 1) {
				document.getElementById("PlasticMark").className = "MarkInvisible";
			}
			
		
			
		
			if (Engine.Player.Sand > 0) {
				document.getElementById("SandResource").className = "swMain";
			}
			
			if (Engine.Player.SandAntiContract > 0) {
				document.getElementById("SandMark").className = "MarkVisible";
			}
			
			if (Engine.Player.SandAntiContract < 1) {
				document.getElementById("SandMark").className = "MarkInvisible";
			}
			
		
			
			if (Engine.Player.Glass > 0) {
				document.getElementById("GlassResource").className = "swMain";
			}
			
			if (Engine.Player.GlassAntiContract > 0) {
				document.getElementById("GlassMark").className = "MarkVisible";
			}
			
			if (Engine.Player.GlassAntiContract < 1) {
				document.getElementById("GlassMark").className = "MarkInvisible";
			}
			
		
			
			if (Engine.Player.Lightbulb > 0) {
				document.getElementById("LightbulbResource").className = "swMain";
			}
			
			if (Engine.Player.LightbulbAntiContract > 0) {
				document.getElementById("LightbulbMark").className = "MarkVisible";
			}
			
			if (Engine.Player.LightbulbAntiContract < 1) {
				document.getElementById("LightbulbMark").className = "MarkInvisible";
			}
			
			
		
			
			if (Engine.Player.Weed > 0) {
				document.getElementById("WeedResource").className = "swMain";
			}
			
			if (Engine.Player.WeedAntiContract > 0) {
				document.getElementById("WeedMark").className = "MarkVisible";
			}
			
			if (Engine.Player.WeedAntiContract < 1) {
				document.getElementById("WeedMark").className = "MarkInvisible";
			}
			
		

			
			
			
		
			if (Engine.Player.GenCoal > 0) {
				document.getElementById("CoalTab2").className = "swMain";
			}
		
			if (Engine.Player.GenCopper > 0) {
				document.getElementById("CopperTab2").className = "swMain";
			}
			
			if (Engine.Player.GenOil > 0) {
				document.getElementById("OilTab2").className = "swMain";
			}
		
			if (Engine.Player.GenGlass > 0) {
				document.getElementById("GlassTab2").className = "swMain";
			}
			
			if (Engine.Player.Workshop > 0) {
				document.getElementById("WorkshopTab2").className = "swMain";
			}
			
			if (Engine.Player.GenPower > 0) {
				document.getElementById("PowerTab2").className = "swMain";
			}
		
			if (Engine.Player.Car > 0) {
				document.getElementById("DealershipTab2").className = "swMain";
			}
			
			if (Engine.Player.PlaneFact > 0) {
				document.getElementById("AirportTab2").className = "swMain";
			}
			
			if (Engine.Player.ConsPartFact > 0) {
				document.getElementById("ConstructionTab2").className = "swMain";
			}
			
			if (Engine.Player.GoldCoin > 0) {
				document.getElementById("GildedTab2").className = "swMain";
			}
			
			
			
			
			if (Engine.TwoSecondCounter > 1) {
				Engine.TwoSecondCounter = 0
			}
		
			
		}
		setTimeout(Engine.IdleTimer, (Engine.IdleSpeed - timeDifference));
	},
	
	Init: function() {
		
		Engine.Clickables.Status = document.getElementById("status");
		Engine.Display.TillAutoSave = document.getElementById("tillautosave");
		
		
		
		
		
		
		Engine.Clickables.Save = document.getElementById("save");
		Engine.Clickables.Save.addEventListener("click", function() {
			Engine.Save();
			return false;
		});
		
		Engine.Clickables.Load = document.getElementById("load");
		Engine.Clickables.Load.addEventListener("click", function() {
			Engine.Load();
			return false;
		});
		
		Engine.Clickables.Delete = document.getElementById("delete");
		Engine.Clickables.Delete.addEventListener("click", function() {
			Engine.Delete();
			return false;
		});
		
		Engine.Clickables.Color = document.getElementById("Color");
		Engine.Clickables.Color.addEventListener("click", function() {
			if (document.getElementById("BodyColor").className = "HolyGrailWhite") {
				document.getElementById("BodyColor").className = "HolyGrailGray";
			} else {
				document.getElementById("BodyColor").className = "HolyGrailWhite";
				return false;
			}
			return false;
		});
		
		
		//=====================
		Engine.Clickables.BuyIronMine = document.getElementById("buyironmine");
		Engine.Clickables.BuyIronMine.addEventListener("click", function() {
			Engine.BuyAIronMine();
			return false;
		});
		
		Engine.Clickables.BuyIronContract = document.getElementById("buyironcontract");
		Engine.Clickables.BuyIronContract.addEventListener("click", function() {
			Engine.BuyAIronContract();
			return false;
		});
		
		Engine.Clickables.BreakIronContract = document.getElementById("breakironcontract");
		Engine.Clickables.BreakIronContract.addEventListener("click", function() {
			Engine.BreakAIronContract();
			return false;
		});
		
		Engine.Clickables.UpgradeIronMine = document.getElementById("upgradeironMine");
		Engine.Clickables.UpgradeIronMine.addEventListener("click", function() {
			Engine.UpgradeAIronMine();
			return false;
		});
		
		
		//=====================
		Engine.Clickables.BuyIRefinery = document.getElementById("buyirefinery");
		Engine.Clickables.BuyIRefinery.addEventListener("click", function() {
			Engine.BuyAIRefinery();
			return false;
		});
		
		Engine.Clickables.UpgradeIRefinery = document.getElementById("upgradeirefinery");
		Engine.Clickables.UpgradeIRefinery.addEventListener("click", function() {
			Engine.UpgradeAIRefinery();
			return false;
		});
		
		Engine.Clickables.BuyRefIronContract = document.getElementById("buyrefironcontract");
		Engine.Clickables.BuyRefIronContract.addEventListener("click", function() {
			Engine.BuyARefIronContract();
			return false;
		});
		
		Engine.Clickables.BreakRefIronContract = document.getElementById("breakrefironcontract");
		Engine.Clickables.BreakRefIronContract.addEventListener("click", function() {
			Engine.BreakARefIronContract();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyMotorFact = document.getElementById("buyMotorFact");
		Engine.Clickables.BuyMotorFact.addEventListener("click", function() {
			Engine.BuyAMotorFact();
			return false;
		});
		
		Engine.Clickables.BuyMotorContract = document.getElementById("buyMotorcontract");
		Engine.Clickables.BuyMotorContract.addEventListener("click", function() {
			Engine.BuyAMotorContract();
			return false;
		});
		
		Engine.Clickables.BreakMotorContract = document.getElementById("breakMotorcontract");
		Engine.Clickables.BreakMotorContract.addEventListener("click", function() {
			Engine.BreakAMotorContract();
			return false;
		});
		
		Engine.Clickables.UpgradeMotorFact = document.getElementById("UpgradeMotorFact");
		Engine.Clickables.UpgradeMotorFact.addEventListener("click", function() {
			Engine.UpgradeAMotorFact();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyCarFact = document.getElementById("buyCarFact");
		Engine.Clickables.BuyCarFact.addEventListener("click", function() {
			Engine.BuyACarFact();
			return false;
		});
		
		Engine.Clickables.BuyCarContract = document.getElementById("buyCarcontract");
		Engine.Clickables.BuyCarContract.addEventListener("click", function() {
			Engine.BuyACarContract();
			return false;
		});
		
		Engine.Clickables.BreakCarContract = document.getElementById("breakCarcontract");
		Engine.Clickables.BreakCarContract.addEventListener("click", function() {
			Engine.BreakACarContract();
			return false;
		});
		
		Engine.Clickables.UpgradeCarFact = document.getElementById("UpgradeCarFact");
		Engine.Clickables.UpgradeCarFact.addEventListener("click", function() {
			Engine.UpgradeACarFact();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyPlaneFact = document.getElementById("buyPlaneFact");
		Engine.Clickables.BuyPlaneFact.addEventListener("click", function() {
			Engine.BuyAPlaneFact();
			return false;
		});
		
		//===================
		Engine.Clickables.BuyCoalMine = document.getElementById("buyCoalmine");
		Engine.Clickables.BuyCoalMine.addEventListener("click", function() {
			Engine.BuyACoalMine();
			return false;
		});
		
		Engine.Clickables.BuyCoalContract = document.getElementById("buyCoalcontract");
		Engine.Clickables.BuyCoalContract.addEventListener("click", function() {
			Engine.BuyACoalContract();
			return false;
		});
		
		Engine.Clickables.BreakCoalContract = document.getElementById("breakCoalcontract");
		Engine.Clickables.BreakCoalContract.addEventListener("click", function() {
			Engine.BreakACoalContract();
			return false;
		});
		
		Engine.Clickables.UpgradeCoalMine = document.getElementById("upgradeCoalMine");
		Engine.Clickables.UpgradeCoalMine.addEventListener("click", function() {
			Engine.UpgradeACoalMine();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuySRefinery = document.getElementById("buysrefinery");
		Engine.Clickables.BuySRefinery.addEventListener("click", function() {
			Engine.BuyASRefinery();
			return false;
		});
		
		Engine.Clickables.UpgradeSRefinery = document.getElementById("upgradesrefinery");
		Engine.Clickables.UpgradeSRefinery.addEventListener("click", function() {
			Engine.UpgradeASRefinery();
			return false;
		});
		
		Engine.Clickables.BuySteelContract = document.getElementById("buysteelcontract");
		Engine.Clickables.BuySteelContract.addEventListener("click", function() {
			Engine.BuyASteelContract();
			return false;
		});
		
		Engine.Clickables.BreakSteelContract = document.getElementById("breaksteelcontract");
		Engine.Clickables.BreakSteelContract.addEventListener("click", function() {
			Engine.BreakASteelContract();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyMechPartFact = document.getElementById("buyMechPartFact");
		Engine.Clickables.BuyMechPartFact.addEventListener("click", function() {
			Engine.BuyAMechPartFact();
			return false;
		});
		
		Engine.Clickables.UpgradeMechPartFact = document.getElementById("UpgradeMechPartFact");
		Engine.Clickables.UpgradeMechPartFact.addEventListener("click", function() {
			Engine.UpgradeAMechPartFact();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyConsPartFact = document.getElementById("buyConsPartFact");
		Engine.Clickables.BuyConsPartFact.addEventListener("click", function() {
			Engine.BuyAConsPartFact();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyACFact = document.getElementById("buyACFact");
		Engine.Clickables.BuyACFact.addEventListener("click", function() {
			Engine.BuyAACFact();
			return false;
		});
		
		Engine.Clickables.BuyACContract = document.getElementById("buyACcontract");
		Engine.Clickables.BuyACContract.addEventListener("click", function() {
			Engine.BuyAACContract();
			return false;
		});
		
		Engine.Clickables.BreakACContract = document.getElementById("breakACcontract");
		Engine.Clickables.BreakACContract.addEventListener("click", function() {
			Engine.BreakAACContract();
			return false;
		});
		
		Engine.Clickables.UpgradeACFact = document.getElementById("UpgradeACFact");
		Engine.Clickables.UpgradeACFact.addEventListener("click", function() {
			Engine.UpgradeAACFact();
			return false;
		});
		
		//===================Copper
		Engine.Clickables.BuyCopperMine = document.getElementById("buyCoppermine");
		Engine.Clickables.BuyCopperMine.addEventListener("click", function() {
			Engine.BuyACopperMine();
			return false;
		});
		
		Engine.Clickables.BuyCopperContract = document.getElementById("buyCoppercontract");
		Engine.Clickables.BuyCopperContract.addEventListener("click", function() {
			Engine.BuyACopperContract();
			return false;
		});
		
		Engine.Clickables.BreakCopperContract = document.getElementById("breakCoppercontract");
		Engine.Clickables.BreakCopperContract.addEventListener("click", function() {
			Engine.BreakACopperContract();
			return false;
		});
		
		Engine.Clickables.UpgradeCopperMine = document.getElementById("upgradeCopperMine");
		Engine.Clickables.UpgradeCopperMine.addEventListener("click", function() {
			Engine.UpgradeACopperMine();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyCRefinery = document.getElementById("buyCRefinery");
		Engine.Clickables.BuyCRefinery.addEventListener("click", function() {
			Engine.BuyACRefinery();
			return false;
		});
		
		Engine.Clickables.UpgradeCRefinery = document.getElementById("upgradecrefinery");
		Engine.Clickables.UpgradeCRefinery.addEventListener("click", function() {
			Engine.UpgradeACRefinery();
			return false;
		});
		
		Engine.Clickables.BuyRefCopperContract = document.getElementById("buyrefCoppercontract");
		Engine.Clickables.BuyRefCopperContract.addEventListener("click", function() {
			Engine.BuyARefCopperContract();
			return false;
		});
		
		Engine.Clickables.BreakRefCopperContract = document.getElementById("breakRefCoppercontract");
		Engine.Clickables.BreakRefCopperContract.addEventListener("click", function() {
			Engine.BreakARefCopperContract();
			return false;
		});
		
		//--------------------
		Engine.Clickables.BuySpooler = document.getElementById("buySpooler");
		Engine.Clickables.BuySpooler.addEventListener("click", function() {
			Engine.BuyASpooler();
			return false;
		});
		
		Engine.Clickables.BuySpoolContract = document.getElementById("buySpoolcontract");
		Engine.Clickables.BuySpoolContract.addEventListener("click", function() {
			Engine.BuyASpoolContract();
			return false;
		});
		
		Engine.Clickables.BreakSpoolContract = document.getElementById("breakSpoolcontract");
		Engine.Clickables.BreakSpoolContract.addEventListener("click", function() {
			Engine.BreakASpoolContract();
			return false;
		});
		
		Engine.Clickables.UpgradeSpooler = document.getElementById("UpgradeSpooler");
		Engine.Clickables.UpgradeSpooler.addEventListener("click", function() {
			Engine.UpgradeASpooler();
			return false;
		});
		
		//--------------------
		Engine.Clickables.BuyElecFact = document.getElementById("buyElecFact");
		Engine.Clickables.BuyElecFact.addEventListener("click", function() {
			Engine.BuyAElecFact();
			return false;
		});
		
		Engine.Clickables.BuyElecContract = document.getElementById("buyEleccontract");
		Engine.Clickables.BuyElecContract.addEventListener("click", function() {
			Engine.BuyAElecContract();
			return false;
		});
		
		Engine.Clickables.BreakElecContract = document.getElementById("breakEleccontract");
		Engine.Clickables.BreakElecContract.addEventListener("click", function() {
			Engine.BreakAElecContract();
			return false;
		});
		
		Engine.Clickables.UpgradeElecFact = document.getElementById("UpgradeElecFact");
		Engine.Clickables.UpgradeElecFact.addEventListener("click", function() {
			Engine.UpgradeAElecFact();
			return false;
		});
		
		//===================Oils
		Engine.Clickables.BuyOilMine = document.getElementById("buyOilmine");
		Engine.Clickables.BuyOilMine.addEventListener("click", function() {
			Engine.BuyAOilMine();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyGRefinery = document.getElementById("buyGRefinery");
		Engine.Clickables.BuyGRefinery.addEventListener("click", function() {
			Engine.BuyAGRefinery();
			return false;
		});
		
		Engine.Clickables.BuyGasContract = document.getElementById("buyGascontract");
		Engine.Clickables.BuyGasContract.addEventListener("click", function() {
			Engine.BuyAGasContract();
			return false;
		});
		
		Engine.Clickables.BreakGasContract = document.getElementById("breakGascontract");
		Engine.Clickables.BreakGasContract.addEventListener("click", function() {
			Engine.BreakAGasContract();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyPRefinery = document.getElementById("buyPRefinery");
		Engine.Clickables.BuyPRefinery.addEventListener("click", function() {
			Engine.BuyAPRefinery();
			return false;
		});
		
		Engine.Clickables.BuyPlasticContract = document.getElementById("buyPlasticcontract");
		Engine.Clickables.BuyPlasticContract.addEventListener("click", function() {
			Engine.BuyAPlasticContract();
			return false;
		});
		
		Engine.Clickables.BreakPlasticContract = document.getElementById("breakPlasticcontract");
		Engine.Clickables.BreakPlasticContract.addEventListener("click", function() {
			Engine.BreakAPlasticContract();
			return false;
		});
		
		
		//===================Sand
		Engine.Clickables.BuyShifter = document.getElementById("buyShifter");
		Engine.Clickables.BuyShifter.addEventListener("click", function() {
			Engine.BuyAShifter();
			return false;
		});
		
		//=====================
		Engine.Clickables.BuyGlassFurnace = document.getElementById("buyGlassFurnace");
		Engine.Clickables.BuyGlassFurnace.addEventListener("click", function() {
			Engine.BuyAGlassFurnace();
			return false;
		});
		
		Engine.Clickables.BuyGlassContract = document.getElementById("buyGlasscontract");
		Engine.Clickables.BuyGlassContract.addEventListener("click", function() {
			Engine.BuyAGlassContract();
			return false;
		});
		
		Engine.Clickables.BreakGlassContract = document.getElementById("breakGlasscontract");
		Engine.Clickables.BreakGlassContract.addEventListener("click", function() {
			Engine.BreakAGlassContract();
			return false;
		});
		
		//======================Lightbulb
		Engine.Clickables.BuyLightbulbFact = document.getElementById("buyLightbulbFact");
		Engine.Clickables.BuyLightbulbFact.addEventListener("click", function() {
			Engine.BuyALightbulbFact();
			return false;
		});
		
		Engine.Clickables.BuyLightbulbContract = document.getElementById("buyLightbulbcontract");
		Engine.Clickables.BuyLightbulbContract.addEventListener("click", function() {
			Engine.BuyALightbulbContract();
			return false;
		});
		
		Engine.Clickables.BreakLightbulbContract = document.getElementById("breakLightbulbcontract");
		Engine.Clickables.BreakLightbulbContract.addEventListener("click", function() {
			Engine.BreakALightbulbContract();
			return false;
		});
		
		Engine.Clickables.UpgradeLightbulbFact = document.getElementById("UpgradeLightbulbFact");
		Engine.Clickables.UpgradeLightbulbFact.addEventListener("click", function() {
			Engine.UpgradeALightbulbFact();
			return false;
		});
		
		//=====================Workshop
		Engine.Clickables.BuildDrill = document.getElementById("builddrill");
		Engine.Clickables.BuildDrill.addEventListener("click", function() {
			Engine.BuildADrill();
			return false;
		});
		Engine.Clickables.BuildFurnace = document.getElementById("buildFurnace");
		Engine.Clickables.BuildFurnace.addEventListener("click", function() {
			Engine.BuildAFurnace();
			return false;
		});
		Engine.Clickables.BuildArm = document.getElementById("buildarm");
		Engine.Clickables.BuildArm.addEventListener("click", function() {
			Engine.BuildAArm();
			return false;
		});
		Engine.Clickables.BuildSolarPlant = document.getElementById("buildSolarPlant");
		Engine.Clickables.BuildSolarPlant.addEventListener("click", function() {
			Engine.BuildASolarPlant();
			return false;
		});
		
		
		//=====================Buildings
		
		Engine.Clickables.BuyLand = document.getElementById("buyLand");
		Engine.Clickables.BuyLand.addEventListener("click", function() {
			Engine.BuyALand();
			return false;
		});
		
		Engine.Clickables.BuyWorkshop = document.getElementById("buyWorkshop");
		Engine.Clickables.BuyWorkshop.addEventListener("click", function() {
			Engine.BuyAWorkshop();
			return false;
		});
		
		Engine.Clickables.BuyApartment = document.getElementById("buyApartment");
		Engine.Clickables.BuyApartment.addEventListener("click", function() {
			Engine.BuyAApartment();
			return false;
		});
		
		Engine.Clickables.BuyOffice = document.getElementById("buyOffice");
		Engine.Clickables.BuyOffice.addEventListener("click", function() {
			Engine.BuyAOffice();
			return false;
		});
		
		
		//=====================Power
		Engine.Clickables.BuyPowerLine = document.getElementById("buyPowerLine");
		Engine.Clickables.BuyPowerLine.addEventListener("click", function() {
			Engine.BuyAPowerLine();
			return false;
		});
		
		Engine.Clickables.BuyCoalPlant = document.getElementById("buyCoalPlant");
		Engine.Clickables.BuyCoalPlant.addEventListener("click", function() {
			Engine.BuyACoalPlant();
			return false;
		});
		
		Engine.Clickables.BuildSolarArray = document.getElementById("buildSolarArray");
		Engine.Clickables.BuildSolarArray.addEventListener("click", function() {
			Engine.BuildASolarArray();
			return false;
		});
		Engine.Clickables.BuyNuclearPlant = document.getElementById("buyNuclearPlant");
		Engine.Clickables.BuyNuclearPlant.addEventListener("click", function() {
			Engine.BuyANuclearPlant();
			return false;
		});
		
		
		//=====================Car
		Engine.Clickables.BuyDealership = document.getElementById("buyDealership");
		Engine.Clickables.BuyDealership.addEventListener("click", function() {
			Engine.BuyADealership();
			return false;
		});
		
		Engine.Clickables.BuyRoad = document.getElementById("buyRoad");
		Engine.Clickables.BuyRoad.addEventListener("click", function() {
			Engine.BuyARoad();
			return false;
		});
		
		Engine.Clickables.BuySolarRoad = document.getElementById("buySolarRoad");
		Engine.Clickables.BuySolarRoad.addEventListener("click", function() {
			Engine.BuyASolarRoad();
			return false;
		});
		
		
		//=====================Plane
		Engine.Clickables.BuyAirport = document.getElementById("buyAirport");
		Engine.Clickables.BuyAirport.addEventListener("click", function() {
			Engine.BuyAAirport();
			return false;
		});
		
		Engine.Clickables.BuyHanger = document.getElementById("buyHanger");
		Engine.Clickables.BuyHanger.addEventListener("click", function() {
			Engine.BuyAHanger();
			return false;
		});
		
		Engine.Clickables.BuyTerminal = document.getElementById("buyTerminal");
		Engine.Clickables.BuyTerminal.addEventListener("click", function() {
			Engine.BuyATerminal();
			return false;
		});
		
		Engine.Clickables.BuyGiftShop = document.getElementById("buyGiftShop");
		Engine.Clickables.BuyGiftShop.addEventListener("click", function() {
			Engine.BuyAGiftShop();
			return false;
		});
		
		//=====================ConstructionClick
		Engine.Clickables.BuyPermit = document.getElementById("buyPermit");
		Engine.Clickables.BuyPermit.addEventListener("click", function() {
			Engine.BuyAPermit();
			return false;
		});
		
		Engine.Clickables.BuildWarehouse = document.getElementById("BuildWarehouse");
		Engine.Clickables.BuildWarehouse.addEventListener("click", function() {
			Engine.BuildAWarehouse();
			return false;
		});
		
		Engine.Clickables.BuildSkyscraper = document.getElementById("BuildSkyscraper");
		Engine.Clickables.BuildSkyscraper.addEventListener("click", function() {
			Engine.BuildASkyscraper();
			return false;
		});
		
		//===================Gilded
		//===================Gilded
		Engine.Clickables.BuyGildedIronMine = document.getElementById("buyGildedIronMine");
		Engine.Clickables.BuyGildedIronMine.addEventListener("click", function() {
			Engine.BuyAGildedIronMine();
			return false;
		});
		
				Engine.Clickables.BuyGildedIRefinery = document.getElementById("buyGildedIRefinery");
				Engine.Clickables.BuyGildedIRefinery.addEventListener("click", function() {
					Engine.BuyAGildedIRefinery();
					return false;
				});
		
		Engine.Clickables.BuyGildedCoalMine = document.getElementById("buyGildedCoalMine");
		Engine.Clickables.BuyGildedCoalMine.addEventListener("click", function() {
			Engine.BuyAGildedCoalMine();
			return false;
		});
		
				Engine.Clickables.BuyGildedSRefinery = document.getElementById("buyGildedSRefinery");
				Engine.Clickables.BuyGildedSRefinery.addEventListener("click", function() {
					Engine.BuyAGildedSRefinery();
					return false;
				});
		
		
		Engine.Clickables.BuyGildedCopperMine = document.getElementById("buyGildedCopperMine");
		Engine.Clickables.BuyGildedCopperMine.addEventListener("click", function() {
			Engine.BuyAGildedCopperMine();
			return false;
		});
		
				Engine.Clickables.BuyGildedCRefinery = document.getElementById("buyGildedCRefinery");
				Engine.Clickables.BuyGildedCRefinery.addEventListener("click", function() {
					Engine.BuyAGildedCRefinery();
					return false;
				});
		
		
		Engine.Clickables.BuyGildedOilWell = document.getElementById("buyGildedOilWell");
		Engine.Clickables.BuyGildedOilWell.addEventListener("click", function() {
			Engine.BuyAGildedOilWell();
			return false;
		});
		
				Engine.Clickables.BuyGildedGRefinery = document.getElementById("buyGildedGRefinery");
				Engine.Clickables.BuyGildedGRefinery.addEventListener("click", function() {
					Engine.BuyAGildedGRefinery();
					return false;
				});
		
				Engine.Clickables.BuyGildedPRefinery = document.getElementById("buyGildedPRefinery");
				Engine.Clickables.BuyGildedPRefinery.addEventListener("click", function() {
					Engine.BuyAGildedPRefinery();
					return false;
				});
		
		
		
		Engine.Clickables.BuyGildedLicense = document.getElementById("buyGildedLicense");
		Engine.Clickables.BuyGildedLicense.addEventListener("click", function() {
			Engine.BuyAGildedLicense();
			return false;
		});
		
		Engine.Clickables.BuyGildedEngineer = document.getElementById("buyGildedEngineer");
		Engine.Clickables.BuyGildedEngineer.addEventListener("click", function() {
			Engine.BuyAGildedEngineer();
			return false;
		});
		
		Engine.Clickables.BuyGildedForeman = document.getElementById("buyGildedForeman");
		Engine.Clickables.BuyGildedForeman.addEventListener("click", function() {
			Engine.BuyAGildedForeman();
			return false;
		});
		
		//=====================Generation
		Engine.Clickables.Retire = document.getElementById("Retire");
		Engine.Clickables.Retire.addEventListener("click", function() {
			Engine.Retire();
			return false;
		});
		
		Engine.Clickables.UnlockCoal = document.getElementById("UnlockCoal");
		Engine.Clickables.UnlockCoal.addEventListener("click", function() {
			Engine.UnlockCoal();
			return false;
		});
		
		Engine.Clickables.UnlockCopper = document.getElementById("UnlockCopper");
		Engine.Clickables.UnlockCopper.addEventListener("click", function() {
			Engine.UnlockCopper();
			return false;
		});
		
		Engine.Clickables.UnlockOil = document.getElementById("UnlockOil");
		Engine.Clickables.UnlockOil.addEventListener("click", function() {
			Engine.UnlockOil();
			return false;
		});
		
		Engine.Clickables.UnlockGlass = document.getElementById("UnlockGlass");
		Engine.Clickables.UnlockGlass.addEventListener("click", function() {
			Engine.UnlockGlass();
			return false;
		});
		
		Engine.Clickables.UnlockPower = document.getElementById("UnlockPower");
		Engine.Clickables.UnlockPower.addEventListener("click", function() {
			Engine.UnlockPower();
			return false;
		});
		
		
		//Engine.Clickables.UnlockBuilding = document.getElementById("UnlockBuilding");
		//Engine.Clickables.UnlockBuilding.addEventListener("click", function() {
		//	Engine.UnlockBuilding();
		//	return false;
		//});
		
		//==========================Crime!
		
		Engine.Clickables.UnlockCrime = document.getElementById("UnlockCrime");
		Engine.Clickables.UnlockCrime.addEventListener("click", function() {
			document.getElementById("CrimeTab2").className = "swMain";
			return false;
		});
		
		Engine.Clickables.BuyWeedplant = document.getElementById("buyWeedplant");
		Engine.Clickables.BuyWeedplant.addEventListener("click", function() {
			Engine.BuyAWeedplant();
			return false;
		});
		
		Engine.Clickables.SellWeed = document.getElementById("SellWeed");
		Engine.Clickables.SellWeed.addEventListener("mouseup", function() {
			Engine.SellWeed();
			return false;
		});
		
		Engine.Clickables.BuyWeedDealer = document.getElementById("buyWeedDealer");
		Engine.Clickables.BuyWeedDealer.addEventListener("click", function() {
			Engine.BuyAWeedDealer();
			return false;
		});
		
		
		Engine.Display.Money = document.getElementById("Money");
		Engine.Display.MoneyPS = document.getElementById("MoneyPS");
		
		//Iron
		Engine.Display.Iron = document.getElementById("Iron");
		
		Engine.Display.IronMine = document.getElementById("IronMine");
		Engine.Display.IronMineCost = document.getElementById("IronMineCost");
		
		Engine.Display.IronDrill = document.getElementById("IronDrill");
		
		Engine.Display.IronContract = document.getElementById("IronContract");
		Engine.Display.IronContractCost = document.getElementById("IronContractCost");
		
		Engine.Display.IronAntiContract = document.getElementById("IronAntiContract");
		
		Engine.Display.IronPS = document.getElementById("IronPS");
		Engine.Values.IronContractIron = document.getElementById("IronContractIron");
		Engine.Values.IronContractMoney = document.getElementById("IronContractMoneyPS");
		
	
		//Refined Iron
		Engine.Display.RefIron = document.getElementById("RefIron");
		
		Engine.Display.IRefinery = document.getElementById("IRefinery");
		Engine.Display.IRefineryCost = document.getElementById("IRefineryCost");
		
		Engine.Display.CombIRefinery = document.getElementById("CombIRefinery");
		
		Engine.Display.RefIronContract = document.getElementById("RefIronContract");
		Engine.Display.RefIronContractCost = document.getElementById("RefIronContractCost");
		
		Engine.Display.RefIronAntiContract = document.getElementById("RefIronAntiContract");
		
		Engine.Display.RefIronPS = document.getElementById("RefIronPS");
		Engine.Values.IRefineryIron = document.getElementById("IRefineryIron");
		Engine.Values.RefIronContractRefIron = document.getElementById("RefIronContractRefIron");
		Engine.Values.RefIronContractMoney = document.getElementById("RefIronContractMoneyPS");
		
	
		//Motor
		Engine.Display.Motor = document.getElementById("Motor");
		
		Engine.Display.MotorFact = document.getElementById("MotorFact");
		Engine.Display.MotorFactCost = document.getElementById("MotorFactCost");
		
		Engine.Display.MotorFactArm = document.getElementById("MotorFactArm");
		
		Engine.Display.MotorContract = document.getElementById("MotorContract");
		Engine.Display.MotorContractCost = document.getElementById("MotorContractCost");
		
		Engine.Display.MotorAntiContract = document.getElementById("MotorAntiContract");
		
		Engine.Display.MotorPS = document.getElementById("MotorPS");
		Engine.Values.MotorContractMotor = document.getElementById("MotorContractMotor");
		Engine.Values.MotorContractMoney = document.getElementById("MotorContractMoneyPS");
		
	
		//Car
		Engine.Display.Car = document.getElementById("Car");
		
		Engine.Display.CarFact = document.getElementById("CarFact");
		Engine.Display.CarFactCost = document.getElementById("CarFactCost");
		
		Engine.Display.CarFactArm = document.getElementById("CarFactArm");
		
		Engine.Display.CarContract = document.getElementById("CarContract");
		Engine.Display.CarContractCost = document.getElementById("CarContractCost");
		
		Engine.Display.CarAntiContract = document.getElementById("CarAntiContract");
		
		Engine.Display.CarPS = document.getElementById("CarPS");
		Engine.Values.CarContractCar = document.getElementById("CarContractCar");
		Engine.Values.CarContractMoney = document.getElementById("CarContractMoneyPS");
		
	
		//Plane
		Engine.Display.Plane = document.getElementById("Plane");
		Engine.Display.ThirtySecondCounter = document.getElementById("ThirtySecondCounter");
		
		Engine.Display.PlaneFact = document.getElementById("PlaneFact");
		Engine.Display.PlaneFactCost = document.getElementById("PlaneFactCost");
		
		Engine.Display.PlaneFactMotor = document.getElementById("PlaneFactMotor");
		Engine.Display.PlaneFactMechPart = document.getElementById("PlaneFactMechPart");
		Engine.Display.PlaneFactElec = document.getElementById("PlaneFactElec");
		Engine.Display.PlaneFactGlass = document.getElementById("PlaneFactGlass");
		Engine.Display.PlanePS = document.getElementById("PlanePS");
		
		
		//Coal
		Engine.Display.Coal = document.getElementById("Coal");
		
		Engine.Display.CoalMine = document.getElementById("CoalMine");
		Engine.Display.CoalMineCost = document.getElementById("CoalMineCost");
		
		Engine.Display.CoalDrill = document.getElementById("CoalDrill");
		
		Engine.Display.CoalContract = document.getElementById("CoalContract");
		Engine.Display.CoalContractCost = document.getElementById("CoalContractCost");
		
		Engine.Display.CoalAntiContract = document.getElementById("CoalAntiContract");
		
		Engine.Display.CoalPS = document.getElementById("CoalPS");
		Engine.Display.CoalContractCoal = document.getElementById("CoalContractCoal");
		Engine.Display.CoalContractMoney = document.getElementById("CoalContractMoney");
		
	
		//Steel
		Engine.Display.Steel = document.getElementById("Steel");
		
		Engine.Display.SRefinery = document.getElementById("SRefinery");
		Engine.Display.SRefineryCost = document.getElementById("SRefineryCost");
		
		Engine.Display.CombSRefinery = document.getElementById("CombSRefinery");
		
		Engine.Display.SteelContract = document.getElementById("SteelContract");
		Engine.Display.SteelContractCost = document.getElementById("SteelContractCost");
		
		Engine.Display.SteelAntiContract = document.getElementById("SteelAntiContract");
		
		Engine.Display.SRefineryIron = document.getElementById("SRefineryIron");
		Engine.Display.SRefineryCoal = document.getElementById("SRefineryCoal");
		Engine.Display.SteelPS = document.getElementById("SteelPS");
		Engine.Display.SteelContractSteel = document.getElementById("SteelContractSteel");
		Engine.Display.SteelContractMoney = document.getElementById("SteelContractMoney");
		
	
		//Mechanical Part
		Engine.Display.MechPart = document.getElementById("MechPart");
		
		Engine.Display.MechPartFact = document.getElementById("MechPartFact");
		Engine.Display.MechPartFactCost = document.getElementById("MechPartFactCost");
		
		Engine.Display.MechPartFactArm = document.getElementById("MechPartFactArm");
		
		Engine.Display.MechPartAntiContract = document.getElementById("MechPartAntiContract");
		
		Engine.Display.MechPartFactSteel = document.getElementById("MechPartFactSteel");
		Engine.Display.MechPartFactRefCopper = document.getElementById("MechPartFactRefCopper");
		Engine.Display.MechPartPS = document.getElementById("MechPartPS");
		
	
		//ConsPart
		Engine.Display.ConsPart = document.getElementById("ConsPart");
		
		Engine.Display.ConsPartFact = document.getElementById("ConsPartFact");
		Engine.Display.ConsPartFactCost = document.getElementById("ConsPartFactCost");
		
		Engine.Display.ConsPartAntiContract = document.getElementById("ConsPartAntiContract");
		
		Engine.Display.ConsPartFactSteel = document.getElementById("ConsPartFactSteel");
		Engine.Display.ConsPartPS = document.getElementById("ConsPartPS");
		
	
		//AC
		Engine.Display.AC = document.getElementById("AC");
		
		Engine.Display.ACFact = document.getElementById("ACFact");
		Engine.Display.ACFactCost = document.getElementById("ACFactCost");
		
		Engine.Display.ACFactArm = document.getElementById("ACFactArm");
		
		Engine.Display.ACContract = document.getElementById("ACContract");
		Engine.Display.ACContractCost = document.getElementById("ACContractCost");
		
		Engine.Display.ACAntiContract = document.getElementById("ACAntiContract");
		
		Engine.Display.ACFactMechPart = document.getElementById("ACFactMechPart");
		Engine.Display.ACFactMotor = document.getElementById("ACFactMotor");
		Engine.Display.ACFactSpool = document.getElementById("ACFactSpool");
		Engine.Display.ACPS = document.getElementById("ACPS");
		Engine.Display.ACContractAC = document.getElementById("ACContractAC");
		Engine.Display.ACContractMoney = document.getElementById("ACContractMoney");
		
		
		//Copper
		Engine.Display.Copper = document.getElementById("Copper");
		
		Engine.Display.CopperMine = document.getElementById("CopperMine");
		Engine.Display.CopperMineCost = document.getElementById("CopperMineCost");
		
		Engine.Display.CopperDrill = document.getElementById("CopperDrill");
		
		Engine.Display.CopperContract = document.getElementById("CopperContract");
		Engine.Display.CopperContractCost = document.getElementById("CopperContractCost");
		
		Engine.Display.CopperAntiContract = document.getElementById("CopperAntiContract");
		
		Engine.Display.CopperPS = document.getElementById("CopperPS");
		Engine.Display.CopperContractCopper = document.getElementById("CopperContractCopper");
		Engine.Display.CopperContractMoney = document.getElementById("CopperContractMoney");
		
	
		//Refined Copper
		Engine.Display.RefCopper = document.getElementById("RefCopper");
		
		Engine.Display.CRefinery = document.getElementById("CRefinery");
		Engine.Display.CRefineryCost = document.getElementById("CRefineryCost");
		
		Engine.Display.CombCRefinery = document.getElementById("CombCRefinery");
		
		Engine.Display.RefCopperContract = document.getElementById("RefCopperContract");
		Engine.Display.RefCopperContractCost = document.getElementById("RefCopperContractCost");
		
		Engine.Display.RefCopperAntiContract = document.getElementById("RefCopperAntiContract");
		
		Engine.Display.CRefineryCopper = document.getElementById("CRefineryCopper");
		Engine.Display.RefCopperPS = document.getElementById("RefCopperPS");
		Engine.Display.RefCopperContractRefCopper = document.getElementById("RefCopperContractRefCopper");
		Engine.Display.RefCopperContractMoney = document.getElementById("RefCopperContractMoney");
		
	
		//Spooler
		Engine.Display.Spool = document.getElementById("Spool");
		
		Engine.Display.Spooler = document.getElementById("Spooler");
		Engine.Display.SpoolerCost = document.getElementById("SpoolerCost");
		
		Engine.Display.SpoolerArm = document.getElementById("SpoolerArm");
		
		Engine.Display.SpoolContract = document.getElementById("SpoolContract");
		Engine.Display.SpoolContractCost = document.getElementById("SpoolContractCost");
		
		Engine.Display.SpoolAntiContract = document.getElementById("SpoolAntiContract");
		
		Engine.Display.SpoolerRefCopper = document.getElementById("SpoolerRefCopper");
		Engine.Display.SpoolPS = document.getElementById("SpoolPS");
		Engine.Display.SpoolContractSpool = document.getElementById("SpoolContractSpool");
		Engine.Display.SpoolContractMoney = document.getElementById("SpoolContractMoney");
		
	
		//ElecFact
		Engine.Display.Electronic = document.getElementById("Electronic");
		
		Engine.Display.ElecFact = document.getElementById("ElecFact");
		Engine.Display.ElecFactCost = document.getElementById("ElecFactCost");
		
		Engine.Display.ElecFactArm = document.getElementById("ElecFactArm");
		
		Engine.Display.ElecContract = document.getElementById("ElecContract");
		Engine.Display.ElecContractCost = document.getElementById("ElecContractCost");
		
		Engine.Display.ElecAntiContract = document.getElementById("ElecAntiContract");
		
		Engine.Display.ElecFactSpool = document.getElementById("ElecFactSpool");
		Engine.Display.ElecFactPlastic = document.getElementById("ElecFactPlastic");
		Engine.Display.ElectronicPS = document.getElementById("ElectronicPS");
		Engine.Display.ElecContractElec = document.getElementById("ElecContractElectronic");
		Engine.Display.ElecContractMoney = document.getElementById("ElecContractMoney");
		
		
		//Oil
		Engine.Display.Oil = document.getElementById("Oil");
		
		Engine.Display.OilMine = document.getElementById("OilMine");
		Engine.Display.OilMineCost = document.getElementById("OilMineCost");
		
		Engine.Display.OilAntiContract = document.getElementById("OilAntiContract");
		
		Engine.Display.OilPS = document.getElementById("OilPS");
	
		//Gas
		Engine.Display.Gas = document.getElementById("Gas");
		
		Engine.Display.GRefinery = document.getElementById("GRefinery");
		Engine.Display.GRefineryCost = document.getElementById("GRefineryCost");
		
		Engine.Display.GasContract = document.getElementById("GasContract");
		Engine.Display.GasContractCost = document.getElementById("GasContractCost");
		
		Engine.Display.GasAntiContract = document.getElementById("GasAntiContract");
		
		Engine.Display.GRefineryOil = document.getElementById("GRefineryOil");
		Engine.Display.GasPS = document.getElementById("GasPS");
		Engine.Display.GasContractGas = document.getElementById("GasContractGas");
		Engine.Display.GasContractMoney = document.getElementById("GasContractMoney");
	
		//Plastic
		Engine.Display.Plastic = document.getElementById("Plastic");
		
		Engine.Display.PRefinery = document.getElementById("PRefinery");
		Engine.Display.PRefineryCost = document.getElementById("PRefineryCost");
		
		Engine.Display.PlasticContract = document.getElementById("PlasticContract");
		Engine.Display.PlasticContractCost = document.getElementById("PlasticContractCost");
		
		Engine.Display.PlasticAntiContract = document.getElementById("PlasticAntiContract");
		
		Engine.Display.PRefineryOil = document.getElementById("PRefineryOil");
		Engine.Display.PlasticPS = document.getElementById("PlasticPS");
		Engine.Display.PlasticContractPlastic = document.getElementById("PlasticContractPlastic");
		Engine.Display.PlasticContractMoney = document.getElementById("PlasticContractMoney");
		
		
		//Sand
		Engine.Display.Sand = document.getElementById("Sand");
		
		Engine.Display.Shifter = document.getElementById("Shifter");
		Engine.Display.ShifterMotorCost = document.getElementById("ShifterMotorCost");
		Engine.Display.ShifterMechCost = document.getElementById("ShifterMechCost");
		
		Engine.Display.SandAntiContract = document.getElementById("SandAntiContract");
		
		Engine.Display.SandPS = document.getElementById("SandPS");
	
		//Glass
		Engine.Display.Glass = document.getElementById("Glass");
		
		Engine.Display.GlassFurnace = document.getElementById("GlassFurnace");
		
		Engine.Display.GlassContract = document.getElementById("GlassContract");
		Engine.Display.GlassContractCost = document.getElementById("GlassContractCost");
		
		Engine.Display.GlassAntiContract = document.getElementById("GlassAntiContract");
		
		Engine.Display.GlassFurnaceSand = document.getElementById("GlassFurnaceSand");
		Engine.Display.GlassPS = document.getElementById("GlassPS");
		Engine.Display.GlassContractGlass = document.getElementById("GlassContractGlass");
		Engine.Display.GlassContractMoney = document.getElementById("GlassContractMoney");
		
	
		//LightbulbFact
		Engine.Display.Lightbulb = document.getElementById("Lightbulb");
		
		Engine.Display.LightbulbFact = document.getElementById("LightbulbFact");
		Engine.Display.LightbulbFactCost = document.getElementById("LightbulbFactCost");
		
		Engine.Display.LightbulbFactArm = document.getElementById("LightbulbFactArm");
		
		Engine.Display.LightbulbContract = document.getElementById("LightbulbContract");
		Engine.Display.LightbulbContractCost = document.getElementById("LightbulbContractCost");
		
		Engine.Display.LightbulbAntiContract = document.getElementById("LightbulbAntiContract");
		
		Engine.Display.LightbulbFactSpool = document.getElementById("LightbulbFactSpool");
		Engine.Display.LightbulbFactGlass = document.getElementById("LightbulbFactGlass");
		Engine.Display.LightbulbPS = document.getElementById("LightbulbPS");
		Engine.Display.LightbulbContractLightbulb = document.getElementById("LightbulbContractLightbulb");
		Engine.Display.LightbulbContractMoney = document.getElementById("LightbulbContractMoney");
		
		
		//Buildables
		
		Engine.Display.Drill = document.getElementById("Drill");
		Engine.Display.DrillMotorCost = document.getElementById("DrillMotorCost");
		Engine.Display.DrillMechCost = document.getElementById("DrillMechCost");
		
		Engine.Display.Furnace = document.getElementById("Furnace");
		Engine.Display.FurnaceCost = document.getElementById("FurnaceCost");
		
		Engine.Display.Arm = document.getElementById("Arm");
		Engine.Display.ArmMotorCost = document.getElementById("ArmMotorCost");
		Engine.Display.ArmMechCost = document.getElementById("ArmMechCost");
		Engine.Display.ArmElecCost = document.getElementById("ArmElecCost");
		
		Engine.Display.SolarArray = document.getElementById("SolarArray");
		Engine.Display.SolarArrayElecCost = document.getElementById("SolarArrayElecCost");
		Engine.Display.SolarArrayGlassCost = document.getElementById("SolarArrayGlassCost");
		
		
		//Power
		
		Engine.Display.MWh = document.getElementById("MWh");
		Engine.Display.MWhMoney = document.getElementById("MWhMoney");
		
		Engine.Display.MWhCost = document.getElementById("MWhCost");
		
		Engine.Display.PowerLine = document.getElementById("PowerLine");
		Engine.Display.PowerLineCost = document.getElementById("PowerLineCost");
		
		Engine.Display.CoalPlant = document.getElementById("CoalPlant");
		Engine.Display.CoalPlantCost = document.getElementById("CoalPlantCost");
		
		Engine.Display.SolarPlant = document.getElementById("SolarPlant");
		Engine.Display.SolarPlantCost = document.getElementById("SolarPlantCost");
		
		Engine.Display.NuclearPlant = document.getElementById("NuclearPlant");
		Engine.Display.NuclearPlantCost = document.getElementById("NuclearPlantCost");
		
		
		// Generations
		
		//Engine.Display.Generations = document.getElementById("Generations");
		//Engine.Display.GenPoints = document.getElementById("GenPoints");
		Engine.Display.GenCost = document.getElementById("GenCost");
		
		
		Engine.Values.GenCoalStatus = document.getElementById("GenCoalStatus");
		Engine.Values.GenCopperStatus = document.getElementById("GenCopperStatus");
		Engine.Values.GenOilStatus = document.getElementById("GenOilStatus");
		Engine.Values.GenGlassStatus = document.getElementById("GenGlassStatus");
		Engine.Values.GenPowerStatus = document.getElementById("GenPowerStatus");
		Engine.Values.GenBuildingStatus = document.getElementById("GenBuildingStatus");
		
		Engine.Values.GenCoalStatus2 = document.getElementById("GenCoalStatus2");
		Engine.Values.GenCopperStatus2 = document.getElementById("GenCopperStatus2");
		Engine.Values.GenOilStatus2 = document.getElementById("GenOilStatus2");
		Engine.Values.GenGlassStatus2 = document.getElementById("GenGlassStatus2");
		Engine.Values.GenPowerStatus2 = document.getElementById("GenPowerStatus2");
		Engine.Values.GenBuildingStatus2 = document.getElementById("GenBuildingStatus2");
		Engine.Values.DealershipStatus2 = document.getElementById("DealershipStatus2");
		Engine.Values.AirportStatus2 = document.getElementById("AirportStatus2");
		
		// Buildings
		Engine.Values.WorkshopStatus = document.getElementById("WorkshopStatus");		
		Engine.Values.WorkshopStatus2 = document.getElementById("WorkshopStatus2");
		
		Engine.Display.Land = document.getElementById("Land");
		Engine.Display.LandCost = document.getElementById("LandCost");
		
		Engine.Display.Workshop = document.getElementById("Workshop");
		Engine.Display.WorkshopCost = document.getElementById("WorkshopCost");
		
		Engine.Display.Apartment = document.getElementById("Apartment");
		Engine.Display.ApartmentCost = document.getElementById("ApartmentCost");
		
		Engine.Display.Office = document.getElementById("Office");
		Engine.Display.OfficeCost = document.getElementById("OfficeCost");
		
		
		//Engine.Display.ContractShift = document.getElementById("ContractShift");
		
		
		//CarTab
		Engine.Display.Dealership = document.getElementById("Dealership");
		Engine.Display.DealershipCost = document.getElementById("DealershipCost");
		
		Engine.Display.Road = document.getElementById("Road");
		Engine.Display.SolarRoad = document.getElementById("SolarRoad");
		Engine.Display.SolarRoadCost = document.getElementById("SolarRoadCost");
		Engine.Display.CarDealerMoney = document.getElementById("CarDealerMoney");
		
		
		//PlaneTab
		Engine.Display.PlaneLimit = document.getElementById("PlaneLimit");
		Engine.Display.AirportMoney = document.getElementById("AirportMoney");
		Engine.Values.AirportStatus = document.getElementById("AirportStatus");
		Engine.Display.Hanger = document.getElementById("Hanger");
		Engine.Display.HangerCost = document.getElementById("HangerCost");
		Engine.Display.Terminal = document.getElementById("Terminal");
		Engine.Display.TerminalCost = document.getElementById("TerminalCost");
		Engine.Display.GiftShop = document.getElementById("GiftShop");
		Engine.Display.GiftShopCost = document.getElementById("GiftShopCost");
		
		
		//ConstructionTab
		Engine.Display.Permit = document.getElementById("Permit");
		Engine.Display.PermitCost = document.getElementById("PermitCost");
		Engine.Display.Warehouse = document.getElementById("Warehouse");
		Engine.Display.Skyscraper = document.getElementById("Skyscraper");
		
		Engine.Display.WarehouseConsPartCost = document.getElementById("WarehouseConsPartCost");
		Engine.Display.WarehouseGlassCost = document.getElementById("WarehouseGlassCost");
		Engine.Display.WarehouseACCost = document.getElementById("WarehouseACCost");
		Engine.Display.WarehouseSpoolCost = document.getElementById("WarehouseSpoolCost");
		Engine.Display.WarehouseLightbulbCost = document.getElementById("WarehouseLightbulbCost");
		Engine.Display.WarehouseBuildTime = document.getElementById("WarehouseBuildTime");
		
		Engine.Display.SkyscraperConsPartCost = document.getElementById("SkyscraperConsPartCost");
		Engine.Display.SkyscraperGlassCost = document.getElementById("SkyscraperGlassCost");
		Engine.Display.SkyscraperACCost = document.getElementById("SkyscraperACCost");
		Engine.Display.SkyscraperSpoolCost = document.getElementById("SkyscraperSpoolCost");
		Engine.Display.SkyscraperLightbulbCost = document.getElementById("SkyscraperLightbulbCost");
		Engine.Display.SkyscraperBuildTime = document.getElementById("SkyscraperBuildTime");
		
		Engine.Display.BuildTime = document.getElementById("BuildTime");
		
		
		//==============CRIMEELEMENTSSSSSSS OHHHH NOOOOO
		//==============
		Engine.Display.Weed = document.getElementById("Weed");
		Engine.Display.WeedPS = document.getElementById("WeedPS");
		Engine.Display.WeedPlant = document.getElementById("WeedPlant");
		Engine.Display.WeedPlantCost = document.getElementById("WeedPlantCost");
		Engine.Display.WeedDealer = document.getElementById("WeedDealer");
		Engine.Display.WeedDealerCost = document.getElementById("WeedDealerCost");
		
		
		Engine.Display.IronContractMoney = document.getElementById("IronContractMoney");
		Engine.Display.RefIronContractMoney = document.getElementById("RefIronContractMoney");
		Engine.Display.MotorContractMoney = document.getElementById("MotorContractMoney");
		Engine.Display.CarContractMoney = document.getElementById("CarContractMoney");
			
		Engine.Display.CoalContractMoney = document.getElementById("CoalContractMoney");
		Engine.Display.SteelContractMoney = document.getElementById("SteelContractMoney");
		Engine.Display.ACContractMoney = document.getElementById("ACContractMoney");
			
		Engine.Display.CopperContractMoney = document.getElementById("CopperContractMoney");
		Engine.Display.RefCopperContractMoney = document.getElementById("RefCopperContractMoney");
		Engine.Display.SpoolContractMoney = document.getElementById("SpoolContractMoney");
		Engine.Display.ElecContractMoney = document.getElementById("ElecContractMoney");
			
		Engine.Display.GasContractMoney = document.getElementById("GasContractMoney");
		Engine.Display.PlasticContractMoney = document.getElementById("PlasticContractMoney");
			
		Engine.Display.GlassContractMoney = document.getElementById("GlassContractMoney");
		Engine.Display.LightbulbContractMoney = document.getElementById("LightbulbContractMoney");
		
		
		//==============GildedElement
		//==============
		Engine.Display.GoldCoinGain = document.getElementById("GoldCoinGain");
		Engine.Display.GoldCoin = document.getElementById("GoldCoin");
		
		
		Engine.Display.GildedIronMine = document.getElementById("GildedIronMine");
		Engine.Display.GildedIronMineCost = document.getElementById("GildedIronMineCost");
		
				Engine.Display.GildedIRefinery = document.getElementById("GildedIRefinery");
				Engine.Display.GildedIRefineryCost = document.getElementById("GildedIRefineryCost");
				
		
		Engine.Display.GildedCoalMine = document.getElementById("GildedCoalMine");
		Engine.Display.GildedCoalMineCost = document.getElementById("GildedCoalMineCost");
		
				Engine.Display.GildedSRefinery = document.getElementById("GildedSRefinery");
				Engine.Display.GildedSRefineryCost = document.getElementById("GildedSRefineryCost");
				
		
		Engine.Display.GildedCopperMine = document.getElementById("GildedCopperMine");
		Engine.Display.GildedCopperMineCost = document.getElementById("GildedCopperMineCost");
		
				Engine.Display.GildedCRefinery = document.getElementById("GildedCRefinery");
				Engine.Display.GildedCRefineryCost = document.getElementById("GildedCRefineryCost");
				
		
		Engine.Display.GildedOilWell = document.getElementById("GildedOilWell");
		Engine.Display.GildedOilWellCost = document.getElementById("GildedOilWellCost");
		
				Engine.Display.GildedGRefinery = document.getElementById("GildedGRefinery");
				Engine.Display.GildedGRefineryCost = document.getElementById("GildedGRefineryCost");
		
				Engine.Display.GildedPRefinery = document.getElementById("GildedPRefinery");
				Engine.Display.GildedPRefineryCost = document.getElementById("GildedPRefineryCost");
				
		
		Engine.Values.GildedLicenseStatus = document.getElementById("GildedLicenseStatus");
		
		Engine.Display.GildedEngineer = document.getElementById("GildedEngineer");
		Engine.Display.GildedEngineerCost = document.getElementById("GildedEngineerCost");
		
		Engine.Display.GildedForeman = document.getElementById("GildedForeman");
		Engine.Display.GildedForemanCost = document.getElementById("GildedForemanCost");
		
		
		
		
		
		
		

		
		
		
		
		
		
		
		Engine.IdleTimer();
		
		// To autoload you could do a savefile check here like so...
		if (window.localStorage.getItem("savefile")) {
			Engine.Load();
		}
		
	}
	
};

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openGilded(evt, cityName2) {
    // Declare all variables
    var i, tabcontent2, tablinks2;

    // Get all elements with class="tabcontent" and hide them
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName2).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function() {
	Engine.Init();
};
