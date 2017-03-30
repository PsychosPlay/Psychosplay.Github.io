/**********************************************************************
Version 1.1: Iron Selling/Breaking/AntiContract
			Refined Selling/AntiContract
			Car Selling/Breaking
			Planes/Airports
			Coal Selling/Breaking/AntiContract
			Refined Selling/AntiContract
			Steel Selling/AntiContract
			AC Selling/Breaking
			Construction
			Copper Selling/Breaking/AntiContract
			Refined Cop Selling/Breaking/AntiContract
			Spools selling/Breaking/AntiContract
			Electronic Selling/Breaking/AntiContract
			Adv Electronics
			Oil/AntiContract
			Gas Selling/Breaking
			Plastic Selling/Breaking/AntiContract
			Sand Shifting/AntiContract
			Glass Selling/Breaking
			Lightbulb Selling/Breaking
			Silicon
			
			Crime
				Weed +Farm
				Coca +Farm
				Meth
				Guns/Ammo
				
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
				Personnel
				Software
				
			Favours
				
			
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
		MoneyCheck: 150,
		ContractShift: 0,
		GoldCoin: 0,
		Favour: 0,
		DebugMenu: "",
		HourHolder: 0,
		MinuteHolder: 0,
		SecondHolder: 0,
		
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
		MotorContractCost: 50,
		
		//Car
		Car: 0,
		CarFact: 0,
		CarFactArm: 0,
		CarContract: 0,
		CarAntiContract: 0,
		CarContractMoney: 0,
		
		CarFactCost: 200000,
		CarContractCost: 1500,
		
		//Plane
		Plane: 0,
		PlaneFact: 0,
		PlaneContract: 0,
		
		PlaneFactCost: 1200000,
		
		
		//Coal
		Coal: 0,
		CoalMine: 0,
		CoalDrill: 0,
		CoalContract: 0,
		CoalAntiContract: 0,
		CoalContractMoney: 0,
		
		CoalMineCost: 50,
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
		
		ConsPartFactCost: 700000,
		
		
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
		SpoolContractCost: 400,
		
		//Electronic
		Electronic: 0,
		ElecFact: 0,
		ElecFactArm: 0,
		ElecContract: 0,
		ElecAntiContract: 0,
		ElecContractMoney: 0,
		
		ElecFactCost: 350000,
		ElecContractCost: 1250,
		
		
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
		
		//Lightbulb
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
		SolarPlantOutput: 5,
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
		GenCost: 5000,
		GenCoal: 0,
		GenCopper: 1,
		GenOil: 0,
		GenGlass: 0,
		GenPower: 0,
		GenBuilding: 1,
		
		//Refined Silicon
		Silicon: 0,
		SiRefinery: 0,
		SiRefineryCost: 300000,
		SiliconAntiContract: 0,
		SiliconContractMoney: 0,
		
		//Advanced Electronic
		AdvElectronic: 0,
		AdvElecFact: 0,
		AdvElecFactCost: 1000000,
		AdvElecFactArm: 0,
		AdvElecContract: 0,
		AdvElecContractCost: 0,
		AdvElecAntiContract: 0,
		AdvElecContractMoney: 0,
		
		//Code
		Code: 0,
		Software: 0,
		SoftwareCost: 3500,
		ProgramAutoCar: 1,
		ProgramAutopilot: 0,
		ProgramArmEfficiency: 15,
		ProgramArrayEfficiency: 1,
		ProgramArrayEfficiencyCost: 20,
		
		
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
		
		GildedAirportStaff: 0,
		GildedAirportStaffCost: 20,
		
		GildedProgrammer: 0,
		GildedProgrammerCost: 20,
		
		GildedDirector: 0,
		GildedDirectorCost: 100,
		
		//PlayerCrime
		GenCrime: 0,
		NoCrime: 0,
		High: 0,
		HighTimer: 0,
		
		//PlayerWeed
		Weed: 0,
		WeedPrice: 10,
		WeedPlant: 0,
		WeedPlantCost: 100,
		WeedFarm: 0,
		WeedFarmCost: 2000,
		
		WeedDealer: 0,
		WeedDealerCost: 1000,
		
		//PlayerCocaine
		Coca: 0,
		CocaPlant: 0,
		CocaPlantCost: 2500,
		CocaFarm: 0,
		CocaFarmCost: 50000,
		CocaAntiContract: 0,
		
		Cocaine: 0,
		CocainePrice: 900,
		CocaineAntiContract: 0,
		CocaRefinery: 0,
		CocaRefineryCost: 8000,
		
		CocaineDealer: 0,
		CocaineDealerCost: 30000,
		
		Crack: 0,
		CrackPrice: 7000,
		CocaineRefinery: 0,
		CocaineRefineryCost: 80000,
		
		CrackDealer: 0,
		CrackDealerCost: 150000,
		
		//PlayerMeth
		Sudafed: 0,
		Smurf: 0,
		SudafedAntiContract: 0,
		SmurfCost: 50,
		
		Meth: 0,
		MethPrice: 30000,
		MethAntiContract: 0,
		MethRefinery: 0,
		MethRefineryCost: 1000000,
		MethDealer: 0,
		MethDealerCost: 200000,
		
		//Guns
		DrugShift: 0,
		
		SmallArm: 0,
		SmallArmFactory: 0,
		SmallArmFactoryCost: 1200000,
		
		HeavyArm: 0,
		HeavyArmFactory: 0,
		HeavyArmFactoryCost: 2500000,
		
		ArmDealersSmall: 0,
		SmallArmDealers1: 10,
		SmallArmDealers2: 100,
		
		ArmDealersHeavy: 0,
		HeavyArmDealers1: 10,
		HeavyArmDealers2: 100,
		
		//PlayerAmmo
		Saltpeter: 0,
		SaltpeterMine: 0,
		SaltpeterMineCost: 20000,
		
		Gunpowder: 0,
		GunpowderFactory: 0,
		GunpowderFactoryCost: 150000,
		
		SmallCaliber: 0,		
		SmallCaliberFactory: 0,
		SmallCaliberFactoryCost: 750000,
		
		HighCaliber: 0,
		HighCaliberFactory: 0,
		HighCaliberFactoryCost: 1250000,
		
		//PlayerFavours
		Hitman: 0,
		HitmanCost: 100,
		
		DoEBribe: 0,
		DoEBribeCost: 50,
		
		ChopShop: 0,
		ChopShopCost: 50,
		
		GenGambling: 0,
		GenGamblingCost: 100,
		
		Inventory: []
	},
	
	TimeThen: new Date().getTime(),
	TimeNow: new Date().getTime(),
	Ticks: 0,
	IdleSpeed: 1000,
	AutoSave: 0,
	TillAutoSave: 0,
	TwoSecondCounter: 0,
	Modal: 0,

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
	
	numberWithCommas: function (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	checkTime: function (i) {
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			if (i == 000) {
				i = "00";
			}
		return i;
	},
	
	InvertingPage: function () { 
		// the css we are going to inject
		var css = 'html {-webkit-filter: invert(100%);' +
			'-moz-filter: invert(100%);' + 
			'-o-filter: invert(100%);' + 
			'-ms-filter: invert(100%); }',

			head = document.getElementsByTagName('head')[0],
			style = document.createElement('style');
	
			// a hack, so you can "invert back" clicking the bookmarklet again
			if (!window.counter) { window.counter = 1;} else  { window.counter ++;
			if (window.counter % 2 == 0) { var css ='html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'}
			};

			style.type = 'text/css';
			if (style.styleSheet){
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}

			//injecting the css to the head
			head.appendChild(style);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.IronMine.innerHTML = Engine.numberWithCommas(Engine.Player.IronMine);
			Engine.Display.IronMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.IronMineCost);
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
			
				Engine.Display.Drill.innerHTML = Engine.numberWithCommas(Engine.Player.Drill);
				Engine.Display.IronMine.innerHTML = Engine.numberWithCommas(Engine.Player.IronMine);
				Engine.Display.IronDrill.innerHTML = Engine.numberWithCommas(Engine.Player.IronDrill);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.IronContract.innerHTML = Engine.numberWithCommas(Engine.Player.IronContract);
			Engine.Status("Iron Contract Started!");
		} else {
			Engine.Status("Not enough Iron!");
		}
		
	},
	
	BreakAIronContract: function() {
	
		if (Engine.Player.IronContract >= 1) {
			Engine.Player.IronContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.IronContract.innerHTML = Engine.numberWithCommas(Engine.Player.IronContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.IRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.IRefinery);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.IRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.IRefinery);
				Engine.Display.CombIRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombIRefinery);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.RefIronContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronContract);
			Engine.Status("Refined Iron Contract Started!");
		} else {
			Engine.Status("Not enough Refined Iron!");
		}
		
	},
	
	BreakARefIronContract: function() {
	
		if (Engine.Player.RefIronContract >= 1) {
			Engine.Player.RefIronContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.RefIronContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MotorFact.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MotorContract.innerHTML = Engine.numberWithCommas(Engine.Player.MotorContract);
			Engine.Status("Motor Contract Started!");
		} else {
			Engine.Status("Not enough Motors!");
		}
		
	},
	
	BreakAMotorContract: function() {
	
		if (Engine.Player.MotorContract >= 1) {
			Engine.Player.MotorContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MotorContract.innerHTML = Engine.numberWithCommas(Engine.Player.MotorContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.MotorFact.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFact);
				Engine.Display.MotorFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFactArm);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CarFact.innerHTML = Engine.numberWithCommas(Engine.Player.CarFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CarContract.innerHTML = Engine.numberWithCommas(Engine.Player.CarContract);
			Engine.Status("Car Contract Started!");
		} else {
			Engine.Status("Not enough Cars!");
		}
		
	},
	
	BreakACarContract: function() {
	
		if (Engine.Player.CarContract >= 1) {
			Engine.Player.CarContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CarContract.innerHTML = Engine.numberWithCommas(Engine.Player.CarContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.CarFact.innerHTML = Engine.numberWithCommas(Engine.Player.CarFact);
				Engine.Display.CarFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.CarFactArm);
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
			Engine.Player.ThirtySecondCounter = 30;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.PlaneFact.innerHTML = Engine.numberWithCommas(Engine.Player.PlaneFact);
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
	
	if (Engine.Player.GenCoal < 3) {
		if (Engine.Player.Money >= Engine.Player.CoalMineCost) {
			Engine.Player.Money -= Engine.Player.CoalMineCost;
			Engine.Player.CoalMine++;
			Engine.Player.CoalMineCost = Math.ceil(Engine.Player.CoalMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CoalMine.innerHTML = Engine.numberWithCommas(Engine.Player.CoalMine);
			Engine.Status("Coal Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
		
	},
	
	
	UpgradeACoalMine: function() {
	
	if (Engine.Player.GenCoal < 3) {
		if (Engine.Player.Drill >= 1) {
			if (Engine.Player.CoalMine >= 1) {
				Engine.Player.CoalMine--;
				Engine.Player.Drill--;
				Engine.Player.CoalDrill++;
			
				Engine.Display.Drill.innerHTML = Engine.numberWithCommas(Engine.Player.Drill);
				Engine.Display.CoalMine.innerHTML = Engine.numberWithCommas(Engine.Player.CoalMine);
				Engine.Display.CoalDrill.innerHTML = Engine.numberWithCommas(Engine.Player.CoalDrill);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CoalContract.innerHTML = Engine.numberWithCommas(Engine.Player.CoalContract);
			Engine.Status("Coal Contract Started!");
		} else {
			Engine.Status("Not enough Coal!");
		}
		
	},
	
	BreakACoalContract: function() {
	
		if (Engine.Player.CoalContract >= 1) {
			Engine.Player.CoalContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CoalContract.innerHTML = Engine.numberWithCommas(Engine.Player.CoalContract);
			Engine.Status("Coal Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyASRefinery: function() {
	
	if (Engine.Player.GenCoal < 3) {
		if (Engine.Player.Money >= Engine.Player.SRefineryCost) {
			Engine.Player.Money -= Engine.Player.SRefineryCost;
			Engine.Player.SRefinery++;
			Engine.Player.SRefineryCost = Math.ceil(Engine.Player.SRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.SRefinery);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.SRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.SRefinery);
				Engine.Display.CombSRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombSRefinery);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SteelContract.innerHTML = Engine.numberWithCommas(Engine.Player.SteelContract);
			Engine.Status("Steel Contract Started!");
		} else {
			Engine.Status("Not enough Steel!");
		}
		
	},
	
	BreakASteelContract: function() {
	
		if (Engine.Player.SteelContract >= 1) {
			Engine.Player.SteelContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SteelContract.innerHTML = Engine.numberWithCommas(Engine.Player.SteelContract);
			Engine.Status("Steel Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuyAMechPartFact: function() {
	
	if (Engine.Player.GenCoal < 3) {
		if (Engine.Player.Money >= Engine.Player.MechPartFactCost) {
			Engine.Player.Money -= Engine.Player.MechPartFactCost;
			Engine.Player.MechPartFact++;
			Engine.Player.MechPartFactCost = Math.ceil(Engine.Player.MechPartFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MechPartFact.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MechPartContract.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartContract);
			Engine.Status("Car Part Contract Started!");
		} else {
			Engine.Status("Not enough Refined Iron!");
		}
		
	},
	
	BreakAMechPartContract: function() {
	
		if (Engine.Player.MechPartContract >= 1) {
			Engine.Player.MechPartContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MechPartContract.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.MechPartFact.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFact);
				Engine.Display.MechPartFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFactArm);
				Engine.Status("Automated Mechanical Part Factory Built!");
			} else {
				Engine.Status("No factory to upgrade!");
			}
		} else {
			Engine.Status("Need to build an automated arm!");
		}
		
	},
	
	
	BuyAACFact: function() {
	
	if (Engine.Player.GenCoal < 3) {
		if (Engine.Player.Money >= Engine.Player.ACFactCost) {
			Engine.Player.Money -= Engine.Player.ACFactCost;
			Engine.Player.ACFact++;
			Engine.Player.ACFactCost = Math.ceil(Engine.Player.ACFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ACFact.innerHTML = Engine.numberWithCommas(Engine.Player.ACFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ACContract.innerHTML = Engine.numberWithCommas(Engine.Player.ACContract);
			Engine.Status("AC Contract Started!");
		} else {
			Engine.Status("Not enough ACs!");
		}
		
	},
	
	BreakAACContract: function() {
	
		if (Engine.Player.ACContract >= 1) {
			Engine.Player.ACContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ACContract.innerHTML = Engine.numberWithCommas(Engine.Player.ACContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.ACFact.innerHTML = Engine.numberWithCommas(Engine.Player.ACFact);
				Engine.Display.ACFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.ACFactArm);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ConsPartFact.innerHTML = Engine.numberWithCommas(Engine.Player.ConsPartFact);
			Engine.Display.MechPartFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFactArm);
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
	Function Coppers
	------------
	*/
	
	
	BuyACopperMine: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.CopperMineCost) {
			Engine.Player.Money -= Engine.Player.CopperMineCost;
			Engine.Player.CopperMine++;
			Engine.Player.CopperMineCost = Math.ceil(Engine.Player.CopperMineCost*1.4);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CopperMine.innerHTML = Engine.numberWithCommas(Engine.Player.CopperMine);
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
			
				Engine.Display.Drill.innerHTML = Engine.numberWithCommas(Engine.Player.Drill);
				Engine.Display.CopperMine.innerHTML = Engine.numberWithCommas(Engine.Player.CopperMine);
				Engine.Display.CopperDrill.innerHTML = Engine.numberWithCommas(Engine.Player.CopperDrill);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.CopperContract);
			Engine.Status("Copper Contract Started!");
		} else {
			Engine.Status("Not enough Copper!");
		}
		
	},
	
	BreakACopperContract: function() {
	
		if (Engine.Player.CopperContract >= 1) {
			Engine.Player.CopperContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.CopperContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CRefinery);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.CRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CRefinery);
				Engine.Display.CombCRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombCRefinery);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.RefCopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperContract);
			Engine.Status("Refined Copper Contract Started!");
		} else {
			Engine.Status("Not enough Refined Copper!");
		}
		
	},
	
	BreakARefCopperContract: function() {
	
		if (Engine.Player.RefCopperContract >= 1) {
			Engine.Player.RefCopperContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.RefCopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Spooler.innerHTML = Engine.numberWithCommas(Engine.Player.Spooler);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SpoolContract.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolContract);
			Engine.Status("Spool Contract Started!");
		} else {
			Engine.Status("Not enough Spools!");
		}
		
	},
	
	BreakASpoolContract: function() {
	
		if (Engine.Player.SpoolContract >= 1) {
			Engine.Player.SpoolContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SpoolContract.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.Spooler.innerHTML = Engine.numberWithCommas(Engine.Player.Spooler);
				Engine.Display.SpoolerArm.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolerArm);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ElecFact.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.ElecContract);
			Engine.Status("Electronic Contract Started!");
		} else {
			Engine.Status("Not enough Electronics!");
		}
		
	},
	
	BreakAElecContract: function() {
	
		if (Engine.Player.ElecContract >= 1) {
			Engine.Player.ElecContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.ElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.ElecContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.ElecFact.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFact);
				Engine.Display.ElecFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFactArm);
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
	Function Oils Button
	------------
	*/
	
		
	BuyAOilMine: function() {
	
	if (Engine.Player.GenOil > 0) {
		if (Engine.Player.Money >= Engine.Player.OilMineCost) {
			Engine.Player.Money -= Engine.Player.OilMineCost;
			Engine.Player.OilMine++;
			Engine.Player.OilMineCost = Math.ceil(Engine.Player.OilMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.OilMine.innerHTML = Engine.numberWithCommas(Engine.Player.OilMine);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.GRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.GRefinery);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.GasContract.innerHTML = Engine.numberWithCommas(Engine.Player.GasContract);
			Engine.Status("Gas Contract Started!");
		} else {
			Engine.Status("Not enough Gas!");
		}
		
	},
	
	BreakAGasContract: function() {
	
		if (Engine.Player.GasContract >= 1) {
			Engine.Player.GasContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.GasContract.innerHTML = Engine.numberWithCommas(Engine.Player.GasContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.PRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.PRefinery);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.PlasticContract.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticContract);
			Engine.Status("Plastic Contract Started!");
		} else {
			Engine.Status("Not enough Plastic!");
		}
		
	},
	
	BreakAPlasticContract: function() {
	
		if (Engine.Player.PlasticContract >= 1) {
			Engine.Player.PlasticContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.PlasticContract.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticContract);
			Engine.Status("Plastic Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	/*
	------------
	Function Sands Button
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
			
				Engine.Display.MechPart.innerHTML = Engine.numberWithCommas(Engine.Player.MechPart);
				Engine.Display.Motor.innerHTML = Engine.numberWithCommas(Engine.Player.Motor);
				Engine.Display.Shifter.innerHTML = Engine.numberWithCommas(Engine.Player.Shifter);
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
			
			Engine.Display.Furnace.innerHTML = Engine.numberWithCommas(Engine.Player.Furnace);
			Engine.Display.GlassFurnace.innerHTML = Engine.numberWithCommas(Engine.Player.GlassFurnace);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.GlassContract.innerHTML = Engine.numberWithCommas(Engine.Player.GlassContract);
			Engine.Status("Glass Contract Started!");
		} else {
			Engine.Status("Not enough Glass!");
		}
		
	},
	
	BreakAGlassContract: function() {
	
		if (Engine.Player.GlassContract >= 1) {
			Engine.Player.GlassContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.GlassContract.innerHTML = Engine.numberWithCommas(Engine.Player.GlassContract);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.LightbulbFact.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFact);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.LightbulbContract.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbContract);
			Engine.Status("Lightbulb Contract Started!");
		} else {
			Engine.Status("Not enough Lightbulbs!");
		}
		
	},
	
	BreakALightbulbContract: function() {
	
		if (Engine.Player.LightbulbContract >= 1) {
			Engine.Player.LightbulbContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.LightbulbContract.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbContract);
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
			
				Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
				Engine.Display.LightbulbFact.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFact);
				Engine.Display.LightbulbFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFactArm);
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
	Function Workshop
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
			
					Engine.Display.Motor.innerHTML = Engine.numberWithCommas(Engine.Player.Motor);
					Engine.Display.MechPart.innerHTML = Engine.numberWithCommas(Engine.Player.MechPart);
					Engine.Display.Drill.innerHTML = Engine.numberWithCommas(Engine.Player.Drill);
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
			
				Engine.Display.RefIron.innerHTML = Engine.numberWithCommas(Engine.Player.RefIron);
				Engine.Display.Furnace.innerHTML = Engine.numberWithCommas(Engine.Player.Furnace);
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
			
					Engine.Display.Motor.innerHTML = Engine.numberWithCommas(Engine.Player.Motor);
					Engine.Display.MechPart.innerHTML = Engine.numberWithCommas(Engine.Player.MechPart);
					Engine.Display.Electronic.innerHTML = Engine.numberWithCommas(Engine.Player.Electronic);
					Engine.Display.Arm.innerHTML = Engine.numberWithCommas(Engine.Player.Arm);
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
			
				Engine.Display.SolarArray.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArray);
				Engine.Display.Electronic.innerHTML = Engine.numberWithCommas(Engine.Player.Electronic);
				Engine.Display.Glass.innerHTML = Engine.numberWithCommas(Engine.Player.Glass);
				Engine.Display.SolarArrayElecCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArrayElecCost);
				Engine.Display.SolarArrayGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArrayGlassCost);
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
	Function Power Plants
	======================
	*/
	
	
	BuyAPowerLine: function() {
	
	if (Engine.Player.GenPower > 0) {
		if (Engine.Player.Money >= Engine.Player.PowerLineCost) {
			Engine.Player.Money -= Engine.Player.PowerLineCost;
			Engine.Player.PowerLine++;
			Engine.Player.PowerLineCost = Math.ceil(Engine.Player.PowerLineCost*1.1);
			Engine.Player.MWhCost = Math.floor(80*(1+(Math.sqrt(Engine.Player.PowerLine)/7)))/10;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.PowerLine.innerHTML = Engine.numberWithCommas(Engine.Player.PowerLine);
			Engine.Display.PowerLineCost.innerHTML = Engine.numberWithCommas(Engine.Player.PowerLineCost);
			Engine.Display.MWhCost.innerHTML = Engine.numberWithCommas(Engine.Player.MWhCost);
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
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CoalPlant.innerHTML = Engine.numberWithCommas(Engine.Player.CoalPlant);
			
			Engine.Player.Land--;
			Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				
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
			
				Engine.Display.SolarPlant.innerHTML = Engine.numberWithCommas(Engine.Player.SolarPlant);
				Engine.Display.SolarPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarPlantCost);
				Engine.Display.SolarArray.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArray);
				
				Engine.Player.Land--;
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				
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
			if (Engine.Player.Land > 1) {
			Engine.Player.Money -= Engine.Player.NuclearPlantCost;
			Engine.Player.NuclearPlant++;
			Engine.Player.NuclearPlantCost = Math.ceil(Engine.Player.NuclearPlantCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.NuclearPlant.innerHTML = Engine.numberWithCommas(Engine.Player.NuclearPlant);
			
			Engine.Player.Land--;
			Engine.Player.Land--;
			Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
			
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
	Function Buildings
	======================
	*/
	
	
	BuyALand: function() {
	
	if (Engine.Player.GenBuilding > 0) {
		if (Engine.Player.Money >= Engine.Player.LandCost) {
				Engine.Player.Money -= Engine.Player.LandCost;
				Engine.Player.Land++;
				Engine.Player.LandCost = Math.ceil(Engine.Player.LandCost*1.1);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.LandCost.innerHTML = Engine.numberWithCommas(Engine.Player.LandCost);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
				Engine.Player.SifterMotorCost = Math.ceil(Engine.Player.SifterMotorCost*0.85);
				Engine.Player.SifterMechCost = Math.ceil(Engine.Player.SifterMechCost*0.85);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.WorkshopCost.innerHTML = Engine.numberWithCommas(Engine.Player.WorkshopCost);
				Engine.Display.Workshop.innerHTML = Engine.numberWithCommas(Engine.Player.Workshop);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.ApartmentCost.innerHTML = Engine.numberWithCommas(Engine.Player.ApartmentCost);
				Engine.Display.Apartment.innerHTML = Engine.numberWithCommas(Engine.Player.Apartment);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.OfficeCost.innerHTML = Engine.numberWithCommas(Engine.Player.OfficeCost);
				Engine.Display.Office.innerHTML = Engine.numberWithCommas(Engine.Player.Office);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
	Function Cars
	======================
	*/
	
	BuyADealership: function() {
	
	if (Engine.Player.Car > Engine.Player.CarContractCost) {
	if (Engine.Player.RawCarPS > 9) {
		if (Engine.Player.Money >= Engine.Player.DealershipCost) {
			if (Engine.Player.Land > 0) {
				Engine.Player.Money -= Engine.Player.DealershipCost;
				Engine.Player.Car -= Engine.Player.CarContractCost;
				Engine.Player.Dealership++;
				Engine.Player.Land--;
				Engine.Player.DealershipCost = Math.ceil(Engine.Player.DealershipCost*1.2);
				Engine.Player.CarContractCost = Math.ceil(Engine.Player.CarContractCost*1.5);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.DealershipCost.innerHTML = Engine.numberWithCommas(Engine.Player.DealershipCost);
				Engine.Display.Dealership.innerHTML = Engine.numberWithCommas(Engine.Player.Dealership);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
	} else {
		Engine.Status("Not enough Cars!"); 
	}
	},
	
	BuyARoad: function() {
	if (Engine.Player.Dealership > 0) {
		if (Engine.Player.Land > 4) {
			Engine.Player.Road++;
			Engine.Player.Land -= 5;
			Engine.Player.RawRoad++;
			Engine.Player.DealerShift = (Math.sqrt(Engine.Player.RawRoad)/10);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Road.innerHTML = Engine.numberWithCommas(Engine.Player.Road);
			Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
			if (Engine.Player.Land > 3) {
				Engine.Player.SolarRoad++;
				Engine.Player.Land -= 3;
				Engine.Player.RawRoad++;
				Engine.Player.DealerShift = (Math.sqrt(Engine.Player.RawRoad)/10);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.Road.innerHTML = Engine.numberWithCommas(Engine.Player.Road);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				Engine.Display.SolarRoadCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarRoadCost);
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
	Function Planes
	======================
	*/
	
	BuyAAirport: function() {
	
	if (Engine.Player.Airport < 1) {
		if (Engine.Player.Money > 3000000) {
			if (Engine.Player.Land > 4) {
				Engine.Player.Money -= 3000000;
				Engine.Player.Airport++;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.PlaneLimit = 30;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.AirportCost.innerHTML = Engine.numberWithCommas(Engine.Player.AirportCost);
				Engine.Display.Airport.innerHTML = Engine.numberWithCommas(Engine.Player.Airport);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
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
	if (Engine.Player.GildedAirportStaff > 0) {
		if (Engine.Player.Money > Engine.Player.HangerCost) {
			if (Engine.Player.Land > 1) {
				Engine.Player.Money -= Engine.Player.HangerCost;
				Engine.Player.Hanger++;
				Engine.Player.Land--;
				Engine.Player.Land--;
				Engine.Player.PlaneLimit += 5;
				Engine.Player.HangerCost = Math.round(Engine.Player.HangerCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.HangerCost.innerHTML = Engine.numberWithCommas(Engine.Player.HangerCost);
				Engine.Display.Hanger.innerHTML = Engine.numberWithCommas(Engine.Player.Hanger);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				Engine.Status("Hanger Built!");
			} else {
				Engine.Status("Need to Purchase Land");
			}
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("You need to hire additonal Airport Staff."); 
	}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	BuyATerminal: function() {
	
	if (Engine.Player.Airport > 0) {
	if (Engine.Player.GildedAirportStaff > 0) {
		if (Engine.Player.Money > Engine.Player.TerminalCost) {
				Engine.Player.Money -= Engine.Player.TerminalCost;
				Engine.Player.Terminal++;
				Engine.Player.PlaneLimit += 1;
				Engine.Player.TerminalCost = Math.round(Engine.Player.TerminalCost*1.3);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.TerminalCost.innerHTML = Engine.numberWithCommas(Engine.Player.TerminalCost);
				Engine.Display.Terminal.innerHTML = Engine.numberWithCommas(Engine.Player.Terminal);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				Engine.Status("Terminal Built!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("You need to hire additonal Airport Staff."); 
	}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	BuyAGiftShop: function() {
	
	if (Engine.Player.Airport > 0) {
	if (Engine.Player.GildedAirportStaff > 0) {
		if (Engine.Player.Money > Engine.Player.GiftShopCost) {
				Engine.Player.Money -= Engine.Player.GiftShopCost;
				Engine.Player.GiftShop++;
				Engine.Player.GiftShopCost = Math.round(Engine.Player.GiftShopCost*1.2);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.GiftShopCost.innerHTML = Engine.numberWithCommas(Engine.Player.GiftShopCost);
				Engine.Display.GiftShop.innerHTML = Engine.numberWithCommas(Engine.Player.GiftShop);
				Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
				Engine.Status("GiftShop Built!");
		} else {
			Engine.Status("Not enough Money!"); 
		}
	} else {
		Engine.Status("You need to hire additonal Airport Staff."); 
	}
	} else {
		Engine.Status("Build an airport first."); 
	}
	},
	
	
	
	/*
	======================
	Function Construction 
	======================
	*/
	
	BuyAPermit: function() {
	
		if (Engine.Player.Money > Engine.Player.PermitCost) {
				Engine.Player.Money -= Engine.Player.PermitCost;
				Engine.Player.Permit++;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.Permit.innerHTML = Engine.numberWithCommas(Engine.Player.Permit);
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
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				
				Engine.Display.WarehouseConsPartCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseConsPartCost);
				Engine.Display.WarehouseGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseGlassCost);
				Engine.Display.WarehouseACCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseACCost);
				Engine.Display.WarehouseSpoolCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseSpoolCost);
				Engine.Display.WarehouseLightbulbCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseLightbulbCost);
				
				Engine.Display.WarehouseBuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseBuildTime);
				Engine.Display.BuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.BuildTime);
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
				Engine.Player.Building = 2;
				
				Engine.Player.SkyscraperBuildTimeBase = Math.round(Engine.Player.SkyscraperBuildTimeBase*1.2);
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				
				Engine.Display.SkyscraperConsPartCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperConsPartCost);
				Engine.Display.SkyscraperGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperGlassCost);
				Engine.Display.SkyscraperACCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperACCost);
				Engine.Display.SkyscraperSpoolCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperSpoolCost);
				Engine.Display.SkyscraperLightbulbCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperLightbulbCost);
				
				Engine.Display.SkyscraperBuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperBuildTime);
				Engine.Display.BuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.BuildTime);
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
	===========
	Function Silicon
	===========
	*/
	
	BuyASiRefinery: function() {
	
	if (Engine.Player.GenCopper > 0) {
		if (Engine.Player.Money >= Engine.Player.SiRefineryCost) {
			Engine.Player.Money -= Engine.Player.SiRefineryCost;
			Engine.Player.SiRefinery++;
			Engine.Player.SiRefineryCost = Math.ceil(Engine.Player.SiRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SiRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.SiRefinery);
			Engine.Status("Silicon Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	}
	},
	
	BuyASiliconContract: function() {
	
		if (Engine.Player.Silicon >= Engine.Player.SiliconContractCost) {
			Engine.Player.Silicon -= Engine.Player.SiliconContractCost;
			Engine.Player.SiliconContract++;
			Engine.Player.SiliconContractCost = Math.ceil(Engine.Player.SiliconContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SiliconContract.innerHTML = Engine.numberWithCommas(Engine.Player.SiliconContract);
			Engine.Status("Silicon Contract Started!");
		} else {
			Engine.Status("Not enough Refined Copper!");
		}
		
	},
	
	BreakASiliconContract: function() {
	
		if (Engine.Player.SiliconContract >= 1) {
			Engine.Player.SiliconContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SiliconContract.innerHTML = Engine.numberWithCommas(Engine.Player.SiliconContract);
			Engine.Status("Silicon Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	// Adv
	BuyAAdvElecFact: function() {
	
	if (Engine.Player.ElecFact >= 1) {
		if (Engine.Player.Money >= Engine.Player.AdvElecFactCost) {
			Engine.Player.Money -= Engine.Player.AdvElecFactCost;
			Engine.Player.AdvElecFact++;
			Engine.Player.ElecFact--;
			Engine.Player.AdvElecFactCost = Math.ceil(Engine.Player.AdvElecFactCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.AdvElecFact.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecFact);
			Engine.Status("Advanced Electronic Factory Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	} else {
		Engine.Status("No factory to upgrade!");
	}
	},
	
	BuyAAdvElecContract: function() {
	
		if (Engine.Player.AdvElectronic >= Engine.Player.AdvElecContractCost) {
			Engine.Player.AdvElectronic -= Engine.Player.AdvElecContractCost;
			Engine.Player.AdvElecContract++;
			Engine.Player.AdvElecContractCost = Math.ceil(Engine.Player.AdvElecContractCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.AdvElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecContract);
			Engine.Status("Advanced Electronic Contract Started!");
		} else {
			Engine.Status("Not enough Advanced Electronics!");
		}
		
	},
	
	BreakAAdvElecContract: function() {
	
		if (Engine.Player.AdvElecContract >= 1) {
			Engine.Player.AdvElecContract--;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.AdvElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecContract);
			Engine.Status("Advanced Electronic Contract Broken!");
		} else {
			Engine.Status("You don't have a Contract!");
		}
		
	},
	
	
	BuildSoftware: function() {
	
		if (Engine.Player.Code >= Engine.Player.SoftwareCost) {
			Engine.Player.Code -= Engine.Player.SoftwareCost;
			Engine.Player.Software++;
			Engine.Player.SoftwareCost = Math.ceil(Engine.Player.SoftwareCost*1.05);
			
			Engine.Display.Code.innerHTML = Engine.numberWithCommas(Engine.Player.Code);
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Display.SoftwareCost.innerHTML = Engine.numberWithCommas(Engine.Player.SoftwareCost);
			Engine.Status("Software Created!");
		} else {
			Engine.Status("Not enough Code!");
		}
	},
	
	
	SellSoftware: function() {
	
		if (Engine.Player.Software >= 1) {
			Engine.Player.Software--;
			Engine.Player.Money += 50000;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Status("Software Sold!");
		} else {
			Engine.Status("Not enough Code!");
		}
	},
	
	/*
	==========================
	Function Programs
	==========================
	*/
	
	ProgramAutoCar: function() {
	
	if (Engine.Player.ProgramAutoCar == 1){
		if (Engine.Player.Software >= 20) {
			Engine.Player.Software -= 20;
			Engine.Player.ProgramAutoCar = 1.5;
			
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Status("Program: Autonomous Cars Installed!");
		} else {
			Engine.Status("Not enough Software!");
		}
	} else {
		Engine.Status("Program is already installed!");
	}
	},
	
	ProgramAutopilot: function() {
	
	if (Engine.Player.ProgramAutopilot == 0){
		if (Engine.Player.Software >= 20) {
			Engine.Player.Software -= 20;
			Engine.Player.ProgramAutopilot = 1;
			Engine.Player.AirportMoneyBase += 100;
			
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Status("Program: Autopilot Installed!");
		} else {
			Engine.Status("Not enough Software!");
		}
	} else {
		Engine.Status("Program is already installed!");
	}
	},
	
	ProgramArmEfficiency: function() {
	
	if (Engine.Player.ProgramArmEfficiency == 15){
		if (Engine.Player.Software >= 20) {
			Engine.Player.Software -= 20;
			Engine.Player.ProgramArmEfficiency = 9;
			
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Status("Program: Automated Arm Efficiency Installed!");
		} else {
			Engine.Status("Not enough Software!");
		}
	} else {
		Engine.Status("Program is already installed!");
	}
	},
	
	ProgramArrayEfficiency: function() {
	
		if (Engine.Player.Software >= Engine.Player.ProgramArrayEfficiencyCost) {
			Engine.Player.Software -= Engine.Player.ProgramArrayEfficiencyCost;
			Engine.Player.ProgramArrayEfficiency++;
			Engine.Player.ProgramArrayEfficiencyCost = Engine.Player.ProgramArrayEfficiencyCost*2
			
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Status("Program: Solar Plant Efficiency Installed!");
		} else {
			Engine.Status("Not enough Software!");
		}
	},
	
	/*
	======================
	Function Gilded
	======================
	*/
	
	BuyAGildedIronMine: function() {
	
		if (Engine.Player.GoldCoin >= Engine.Player.GildedIronMineCost) {
			Engine.Player.GoldCoin -= Engine.Player.GildedIronMineCost;
			Engine.Player.GildedIronMine++;
			Engine.Player.GildedIronMineCost = Math.ceil(Engine.Player.GildedIronMineCost*1.3);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedIronMine.innerHTML = Engine.Player.GildedIronMine;
			Engine.Status("Gilded Iron Mine Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedIRefinery: function() {
			if (Engine.Player.GildedSRefinery + Math.floor(Engine.Player.GildedIronMine/2) >= (1 + Engine.Player.GildedIRefinery)) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedIRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedIRefineryCost;
					Engine.Player.GildedIRefinery++;
					Engine.Player.GildedIRefineryCost = Math.ceil(Engine.Player.GildedIRefineryCost*1.3);
			
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
			Engine.Player.GildedCoalMineCost = Math.ceil(Engine.Player.GildedCoalMineCost*1.3);
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.GildedCoalMine.innerHTML = Engine.Player.GildedCoalMine;
			Engine.Status("Gilded Coal Mine Bought!");
		} else {
			Engine.Status("Not enough Gold Coins!");
		}
		
	},
	
	
			BuyAGildedSRefinery: function() {
			if (Math.floor(6*(Engine.Player.GildedCoalMine/9)) >= (1 + Engine.Player.GildedSRefinery)) {
			if ((Engine.Player.GildedIronMine*10 - Engine.Player.GildedIRefinery*20 - Engine.Player.GildedSRefinery*10) >= (10)) {
				if (Engine.Player.GoldCoin >= Engine.Player.GildedSRefineryCost) {
					Engine.Player.GoldCoin -= Engine.Player.GildedSRefineryCost;
					Engine.Player.GildedSRefinery++;
					Engine.Player.GildedSRefineryCost = Math.ceil(Engine.Player.GildedSRefineryCost*1.3);
			
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
			Engine.Player.GildedCopperMineCost = Math.ceil(Engine.Player.GildedCopperMineCost*1.3);
			
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
					Engine.Player.GildedCRefineryCost = Math.ceil(Engine.Player.GildedCRefineryCost*1.3);
			
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
			Engine.Player.GildedOilWellCost = Math.ceil(Engine.Player.GildedOilWellCost*1.3);
			
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
					Engine.Player.GildedGRefineryCost = Math.ceil(Engine.Player.GildedGRefineryCost*1.3);
			
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
					Engine.Player.GildedPRefineryCost = Math.ceil(Engine.Player.GildedPRefineryCost*1.3);
			
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
	
	BuyAGildedAirportStaff: function() {
	if (Engine.Player.GoldCoin >= Engine.Player.GildedAirportStaffCost) {
		Engine.Player.GoldCoin -= Engine.Player.GildedAirportStaffCost;
		Engine.Player.GildedAirportStaff++;
		Engine.Player.GildedAirportStaffCost = Math.ceil(Engine.Player.GildedAirportStaffCost*1.05);
			
		Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
		Engine.Display.GildedAirportStaff.innerHTML = Engine.Player.GildedAirportStaff;
		Engine.Display.GildedAirportStaffCost.innerHTML = Engine.Player.GildedAirportStaffCost;
		Engine.Status("Gilded Airport Staff Hired!");
	} else {
		Engine.Status("Not enough Gold Coins!");
	}
	},
	
	BuyAGildedProgrammer: function() {
	if (Engine.Player.GoldCoin >= Engine.Player.GildedProgrammerCost) {
		Engine.Player.GoldCoin -= Engine.Player.GildedProgrammerCost;
		Engine.Player.GildedProgrammer++;
		Engine.Player.GildedProgrammerCost = Math.ceil(Engine.Player.GildedProgrammerCost*1.2);
			
		Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
		Engine.Display.GildedProgrammer.innerHTML = Engine.Player.GildedProgrammer;
		Engine.Display.GildedProgrammerCost.innerHTML = Engine.Player.GildedProgrammerCost;
		Engine.Status("Gilded Programmer Hired!");
	} else {
		Engine.Status("Not enough Gold Coins!");
	}
	},
	
	BuyAGildedDirector: function() {
	if (Engine.Player.GoldCoin >= Engine.Player.GildedDirectorCost) {
		Engine.Player.GoldCoin -= Engine.Player.GildedDirectorCost;
		Engine.Player.GildedDirector++;
		Engine.Player.SoftwareCost = Math.ceil(Engine.Player.SoftwareCost/1.2);
		Engine.Player.GildedDirectorCost = Math.ceil(Engine.Player.GildedDirectorCost*1.2);
			
		Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
		Engine.Display.GildedDirector.innerHTML = Engine.Player.GildedDirector;
		Engine.Display.GildedDirectorCost.innerHTML = Engine.Player.GildedDirectorCost;
		Engine.Status("Gilded Director Hired!");
	} else {
		Engine.Status("Not enough Gold Coins!");
	}
	},
	
	
	/*
	======================
	Function Crime
	======================
	*/
	
	UnlockCrime: function() {
	if (Engine.Values.MoneyPS == 0) {
		if (Engine.Player.Money == 150) {
			Engine.Player.GenCrime = 1;
			Engine.Player.GenCoal = 1;
		}
	}
	},
	
	GetHigh: function() {
	if (Engine.Player.Cocaine > 99) {
		Engine.Player.High = 1;
		Engine.Player.HighTimer += 10;
		Engine.Player.Cocaine -= 100;
		Engine.Display.Cocaine.innerHTML = Engine.numberWithCommas(Engine.Player.Cocaine);
		Engine.Display.HighTimer.innerHTML = Engine.Player.HighTimer;
		document.getElementById("HighTimerResource").className = "swMain";
	}
	},
	
	
	/*
	======================
	Function Weed
	======================
	*/
	
	
	BuyAWeedplant: function() {
	
		if (Engine.Player.Money >= Engine.Player.WeedPlantCost) {
			Engine.Player.Money -= Engine.Player.WeedPlantCost;
			Engine.Player.WeedPlant++;
			Engine.Player.WeedPlantCost = Math.ceil(Engine.Player.WeedPlantCost*1.1);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.WeedPlant.innerHTML = Engine.Player.WeedPlant;
			Engine.Display.WeedPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedPlantCost);
			Engine.Status("''Fern'' Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyAWeedFarm: function() {
	
		if (Engine.Player.Money >= Engine.Player.WeedFarmCost) {
		if (Engine.Player.WeedPlant >= 20) {
			Engine.Player.Money -= Engine.Player.WeedFarmCost;
			Engine.Player.WeedPlant -= 20;
			Engine.Player.WeedFarm++;
			Engine.Player.WeedFarmCost = Math.ceil(Engine.Player.WeedFarmCost*1.3);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.WeedPlant.innerHTML = Engine.Player.WeedPlant;
			Engine.Display.WeedFarm.innerHTML = Engine.Player.WeedFarm;
			Engine.Display.WeedFarmCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedFarmCost);
			Engine.Status("Weed Farm started!");
		} else {
			Engine.Status("Not enough Weed Plants!");
		}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellWeed: function() {
	
		if (Engine.Player.Weed > 0) {
			Engine.Player.Weed--;
			Engine.Player.Money += 10;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Weed.innerHTML = Engine.numberWithCommas(Engine.Player.Weed);
			Engine.Status("Weed Sold...");
		} else {
			Engine.Status("Not enough Weed!");
		}
	},
	
	BuyAWeedDealer: function() {
	
		if (Engine.Player.Money >= Engine.Player.WeedDealerCost) {
			Engine.Player.Money -= Engine.Player.WeedDealerCost;
			Engine.Player.WeedDealer++;
			Engine.Player.WeedDealerCost = Math.ceil(Engine.Player.WeedDealerCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.WeedDealer.innerHTML = Engine.Player.WeedDealer;
			Engine.Display.WeedDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedDealerCost);
			Engine.Status("Weed Dealer Hired!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	
	/*
	======================
	Function Cocaine
	======================
	*/
	
	
	BuyACocaplant: function() {
	
		if (Engine.Player.Money >= Engine.Player.CocaPlantCost) {
			Engine.Player.Money -= Engine.Player.CocaPlantCost;
			Engine.Player.CocaPlant++;
			Engine.Player.CocaPlantCost = Math.ceil(Engine.Player.CocaPlantCost*1.1);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CocaPlant.innerHTML = Engine.numberWithCommas(Engine.Player.CocaPlant);
			Engine.Display.CocaPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaPlantCost);
			Engine.Status("''Fern'' Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyACocaFarm: function() {
	
		if (Engine.Player.Money >= Engine.Player.CocaFarmCost) {
		if (Engine.Player.CocaPlant >= 20) {
			Engine.Player.Money -= Engine.Player.CocaFarmCost;
			Engine.Player.CocaPlant -= 20;
			Engine.Player.CocaFarm++;
			Engine.Player.CocaFarmCost = Math.ceil(Engine.Player.CocaFarmCost*1.3);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CocaPlant.innerHTML = Engine.Player.CocaPlant;
			Engine.Display.CocaFarm.innerHTML = Engine.Player.CocaFarm;
			Engine.Display.CocaFarmCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaFarmCost);
			Engine.Status("Coca Farm Started!");
		} else {
			Engine.Status("Not enough Coca Plants!");
		}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellCoca: function() {
	
		if (Engine.Player.Coca > 0) {
			Engine.Player.Coca--;
			Engine.Player.Money += 120;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Coca.innerHTML = Engine.numberWithCommas(Engine.Player.Coca);
			Engine.Status("Coca Sold...");
		} else {
			Engine.Status("Not enough Coca!");
		}
	},
	
	BuyACocaRefinery: function() {
	
		if (Engine.Player.Money >= Engine.Player.CocaRefineryCost) {
			Engine.Player.Money -= Engine.Player.CocaRefineryCost;
			Engine.Player.CocaRefinery++;
			Engine.Player.CocaRefineryCost = Math.ceil(Engine.Player.CocaRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CocaRefinery.innerHTML = Engine.Player.CocaRefinery;
			Engine.Display.CocaRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaRefineryCost);
			Engine.Status("Cocaine Refinery Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellCocaine: function() {
	
		if (Engine.Player.Cocaine > 0) {
			Engine.Player.Cocaine--;
			Engine.Player.Money += 900;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Cocaine.innerHTML = Engine.numberWithCommas(Engine.Player.Cocaine);
			Engine.Status("Cocaine Sold...");
		} else {
			Engine.Status("Not enough Cocaine!");
		}
	},
	
	BuyACocaineDealer: function() {
	
		if (Engine.Player.Money >= Engine.Player.CocaineDealerCost) {
			Engine.Player.Money -= Engine.Player.CocaineDealerCost;
			Engine.Player.CocaineDealer++;
			Engine.Player.CocaineDealerCost = Math.ceil(Engine.Player.CocaineDealerCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CocaineDealer.innerHTML = Engine.Player.CocaineDealer;
			Engine.Display.CocaineDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineDealerCost);
			Engine.Status("Cocaine Dealer Hired!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyACocaineRefinery: function() {
	
		if (Engine.Player.Money >= Engine.Player.CocaineRefineryCost) {
			Engine.Player.Money -= Engine.Player.CocaineRefineryCost;
			Engine.Player.CocaineRefinery++;
			Engine.Player.CocaineRefineryCost = Math.ceil(Engine.Player.CocaineRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CocaineRefinery.innerHTML = Engine.Player.CocaineRefinery;
			Engine.Display.CocaineRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineRefineryCost);
			Engine.Status("Crack Lab Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellCrack: function() {
	
		if (Engine.Player.Crack > 0) {
			Engine.Player.Crack--;
			Engine.Player.Money += 7000;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Crack.innerHTML = Engine.numberWithCommas(Engine.Player.Crack);
			Engine.Status("Crack Sold...");
		} else {
			Engine.Status("Not enough Crack!");
		}
	},
	
	BuyACrackDealer: function() {
	
		if (Engine.Player.Money >= Engine.Player.CrackDealerCost) {
			Engine.Player.Money -= Engine.Player.CrackDealerCost;
			Engine.Player.CrackDealer++;
			Engine.Player.CrackDealerCost = Math.ceil(Engine.Player.CrackDealerCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.CrackDealer.innerHTML = Engine.Player.CrackDealer;
			Engine.Display.CrackDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.CrackDealerCost);
			Engine.Status("Crack Dealer Hired!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	
	/*
	======================
	Function Meth
	======================
	*/
	
	BuyAMethRefinery: function() {
	
		if (Engine.Player.Money >= Engine.Player.MethRefineryCost) {
			Engine.Player.Money -= Engine.Player.MethRefineryCost;
			Engine.Player.MethRefinery++;
			Engine.Player.MethRefineryCost = Math.ceil(Engine.Player.MethRefineryCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MethRefinery.innerHTML = Engine.Player.MethRefinery;
			Engine.Display.MethRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.MethRefineryCost);
			Engine.Status("Meth Lab Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	SellMeth: function() {
	
		if (Engine.Player.Meth > 0) {
			Engine.Player.Meth--;
			Engine.Player.Money += 30000;
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.Meth.innerHTML = Engine.numberWithCommas(Engine.Player.Meth);
			Engine.Status("Meth Sold...");
		} else {
			Engine.Status("Not enough Meth!");
		}
	},
	
	BuyAMethDealer: function() {
	
		if (Engine.Player.Money >= Engine.Player.MethDealerCost) {
			Engine.Player.Money -= Engine.Player.MethDealerCost;
			Engine.Player.MethDealer++;
			Engine.Player.MethDealerCost = Math.ceil(Engine.Player.MethDealerCost*1.5);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.MethDealer.innerHTML = Engine.Player.MethDealer;
			Engine.Display.MethDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.MethDealerCost);
			Engine.Status("Meth Dealer Hired!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyASmurf: function() {
	
		if (Engine.Player.Meth >= Engine.Player.SmurfCost) {
			Engine.Player.Meth -= Engine.Player.SmurfCost;
			Engine.Player.Smurf++;
			Engine.Player.SmurfCost = Math.ceil(Engine.Player.SmurfCost*1.2);
			
			Engine.Display.Meth.innerHTML = Engine.numberWithCommas(Engine.Player.Meth);
			Engine.Display.Smurf.innerHTML = Engine.Player.Smurf;
			Engine.Display.SmurfCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmurfCost);
			Engine.Status("Meth Dealer Hired!");
		} else {
			Engine.Status("Not enough Meth!");
		}
	},
	
	
	/*
	======================
	Function Guns
	======================
	*/
	
	BuyASmallArmFactory: function() {
	
		if (Engine.Player.Money >= Engine.Player.SmallArmFactoryCost) {
			if (Engine.Values.RefIronPS >= 15) {
				Engine.Player.Money -= Engine.Player.SmallArmFactoryCost;
				Engine.Player.SmallArmFactory++;
				Engine.Player.SmallArmFactoryCost = Math.ceil(Engine.Player.SmallArmFactoryCost*1.2);
				Engine.Values.RefIronPS = Engine.Player.IRefinery*10 + Engine.Player.CombIRefinery*30 + Engine.Player.GildedIRefinery*10 - Engine.Player.RefIronContract*10 - Engine.Player.MotorFact*10 - Engine.Player.MotorFactArm*30 - Engine.Player.SmallArmFactory*15 - Engine.Player.HeavyArmFactory*15;
				Engine.Values.SteelPS = Engine.Player.SRefinery*10 + Engine.Player.CombSRefinery*30 + Engine.Player.GildedSRefinery*10 - Engine.Player.SteelContract*10 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*30 - Engine.Player.MotorFact*5 - Engine.Player.MotorFactArm*15 - Engine.Player.HeavyArmFactory*15;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.SmallArmFactory.innerHTML = Engine.Player.SmallArmFactory;
				Engine.Display.SmallArmFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArmFactoryCost);
				Engine.Status("Small Arm Factory Bought!");
			} else {
				Engine.Status("Need to increase Refined Iron Production");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	armDealersSmall: function() {
		if (Engine.Player.SmallArm > Engine.Player.SmallArmDealers1) {
			if (Engine.Player.SmallCaliber > Engine.Player.SmallArmDealers2) {
				Engine.Player.SmallArm -= Engine.Player.SmallArmDealers1;
				Engine.Player.SmallCaliber -= Engine.Player.SmallArmDealers2;
				Engine.Player.ArmDealersSmall++;
				Engine.Player.SmallArmDealers1 = Engine.Player.SmallArmDealers1*10;
				Engine.Player.SmallArmDealers2 = Engine.Player.SmallArmDealers2*10;
				Engine.Status("Dealers Armed!");
			} else {
				Engine.Status("Need more Small Caliber Bullets");
			}
		} else {
			Engine.Status("Need more Small Arms");
		}
	},
	
	BuyAHeavyArmFactory: function() {
	
		if (Engine.Player.Money >= Engine.Player.HeavyArmFactoryCost) {
			if (Engine.Values.RefIronPS >= 15) {
			if (Engine.Values.SteelPS >= 15) {
				Engine.Player.Money -= Engine.Player.HeavyArmFactoryCost;
				Engine.Player.HeavyArmFactory++;
				Engine.Player.HeavyArmFactoryCost = Math.ceil(Engine.Player.HeavyArmFactoryCost*1.2);
				Engine.Values.RefIronPS = Engine.Player.IRefinery*10 + Engine.Player.CombIRefinery*30 + Engine.Player.GildedIRefinery*10 - Engine.Player.RefIronContract*10 - Engine.Player.MotorFact*10 - Engine.Player.MotorFactArm*30 - Engine.Player.SmallArmFactory*15 - Engine.Player.HeavyArmFactory*15;
				Engine.Values.SteelPS = Engine.Player.SRefinery*10 + Engine.Player.CombSRefinery*30 + Engine.Player.GildedSRefinery*10 - Engine.Player.SteelContract*10 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*30 - Engine.Player.MotorFact*5 - Engine.Player.MotorFactArm*15 - Engine.Player.HeavyArmFactory*15;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.HeavyArmFactory.innerHTML = Engine.Player.HeavyArmFactory;
				Engine.Display.HeavyArmFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArmFactoryCost);
				Engine.Status("Heavy Arm Factory Bought!");
			} else {
				Engine.Status("Need to increase Steel Production");
			}
			} else {
				Engine.Status("Need to increase Refined Iron Production");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	armDealersHeavy: function() {
		if (Engine.Player.HeavyArm > Engine.Player.HeavyArmDealers1) {
			if (Engine.Player.HighCaliber > Engine.Player.HeavyArmDealers2) {
				Engine.Player.HeavyArm -= Engine.Player.HeavyArmDealers1;
				Engine.Player.HighCaliber -= Engine.Player.HeavyArmDealers2;
				Engine.Player.ArmDealersHeavy++;
				Engine.Player.HeavyArmDealers1 = Engine.Player.HeavyArmDealers1*10;
				Engine.Player.HeavyArmDealers2 = Engine.Player.HeavyArmDealers2*10;
				Engine.Status("Dealers Heavily Armed!");
			} else {
				Engine.Status("Need more High Caliber Bullets");
			}
		} else {
			Engine.Status("Need more Heavy Arms");
		}
	},
	
	
	/*
	======================
	Function Ammo
	======================
	*/
	
	BuyASaltpeterMine: function() {
	
		if (Engine.Player.Money >= Engine.Player.SaltpeterMineCost) {
			Engine.Player.Money -= Engine.Player.SaltpeterMineCost;
			Engine.Player.SaltpeterMine++;
			Engine.Player.SaltpeterMineCost = Math.ceil(Engine.Player.SaltpeterMineCost*1.2);
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			Engine.Display.SaltpeterMine.innerHTML = Engine.Player.SaltpeterMine;
			Engine.Display.SaltpeterMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.SaltpeterMineCost);
			Engine.Status("Saltpeter Mine Bought!");
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyAGunpowderFactory: function() {
	
		if (Engine.Player.Money >= Engine.Player.GunpowderFactoryCost) {
			if (Engine.Values.SaltpeterPS >= 5) {
			if (Engine.Values.CoalPS >= 6) {
				Engine.Player.Money -= Engine.Player.GunpowderFactoryCost;
				Engine.Player.GunpowderFactory++;
				Engine.Player.GunpowderFactoryCost = Math.ceil(Engine.Player.GunpowderFactoryCost*1.2);
				Engine.Values.CoalPS = Engine.Player.CoalMine*3 + Engine.Player.CoalDrill*12 + Engine.Player.GildedCoalMine*6 - Engine.Player.CoalContract*10 - Engine.Player.SRefinery*9 - Engine.Player.CombSRefinery*27 - Engine.Player.CoalPlant*30 - Engine.Player.GildedSRefinery*9 - Engine.Player.GunpowderFactory*6;
				Engine.Values.SaltpeterPS = Engine.Player.SaltpeterMine*10 - Engine.Player.GunpowderFactory*5;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.GunpowderFactory.innerHTML = Engine.Player.GunpowderFactory;
				Engine.Display.GunpowderFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.GunpowderFactoryCost);
				Engine.Status("Gunpowder Factory Bought!");
			} else {
				Engine.Status("Need to increase Coal Production");
			}
			} else {
				Engine.Status("Need to increase Saltpeter Production");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyASmallCaliberFactory: function() {
	
		if (Engine.Player.Money >= Engine.Player.SmallCaliberFactory) {
			if (Engine.Values.GunpowderPS >= 10) {
			if (Engine.Values.RefCopperPS >= 10) {
				Engine.Player.Money -= Engine.Player.SmallCaliberFactory;
				Engine.Player.SmallCaliberFactory++;
				Engine.Player.SmallCaliberFactoryCost = Math.ceil(Engine.Player.SmallCaliberFactoryCost*1.2);
				Engine.Values.RefCopperPS = Engine.Player.CRefinery*10 + Engine.Player.CombCRefinery*30 + Engine.Player.GildedCRefinery*10 - Engine.Player.RefCopperContract*10 - Engine.Player.Spooler*50 - Engine.Player.SpoolerArm*150 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*20 - Engine.Player.SmallCaliberFactory*10 - Engine.Player.HighCaliberFactory*20;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.SmallCaliberFactory.innerHTML = Engine.Player.SmallCaliberFactory;
				Engine.Display.SmallCaliberFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmallCaliberFactoryCost);
				Engine.Status("Small Caliber Factory Bought!");
			} else {
				Engine.Status("Need to increase Refined Copper Production");
			}
			} else {
				Engine.Status("Need to increase Gunpowder Production");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	BuyAHighCaliberFactory: function() {
	
		if (Engine.Player.Money >= Engine.Player.HighCaliberFactory) {
			if (Engine.Values.GunpowderPS >= 20) {
			if (Engine.Values.RefCopperPS >= 20) {
				Engine.Player.Money -= Engine.Player.HighCaliberFactory;
				Engine.Player.HighCaliberFactory++;
				Engine.Player.HighCaliberFactoryCost = Math.ceil(Engine.Player.HighCaliberFactoryCost*1.2);
				Engine.Values.RefCopperPS = Engine.Player.CRefinery*10 + Engine.Player.CombCRefinery*30 + Engine.Player.GildedCRefinery*10 - Engine.Player.RefCopperContract*10 - Engine.Player.Spooler*50 - Engine.Player.SpoolerArm*150 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*20 - Engine.Player.SmallCaliberFactory*10 - Engine.Player.HighCaliberFactory*20;
			
				Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				Engine.Display.HighCaliberFactory.innerHTML = Engine.Player.HighCaliberFactory;
				Engine.Display.HighCaliberFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.HighCaliberFactoryCost);
				Engine.Status("High Caliber Factory Bought!");
			} else {
				Engine.Status("Need to increase Refined Copper Production");
			}
			} else {
				Engine.Status("Need to increase Gunpowder Production");
			}
		} else {
			Engine.Status("Not enough Money!");
		}
	},
	
	
	/*
	======================
	Function Favours
	======================
	*/
	
	BuyAHitman: function() {
	
		if (Engine.Player.Favour >= Engine.Player.HitmanCost) {
			Engine.Player.Favour -= Engine.Player.HitmanCost;
			Engine.Player.Hitman++;
			Engine.Player.HitmanCost = Math.ceil(Engine.Player.HitmanCost*2);
			
			Engine.Display.Favour.innerHTML = Engine.numberWithCommas(Engine.Player.Favour);
			Engine.Display.HitmanCost.innerHTML = Engine.numberWithCommas(Engine.Player.HitmanCost);
			Engine.Display.Hitman.innerHTML = Engine.Player.Hitman;
			Engine.Status("Hitman Hired.");
		} else {
			Engine.Status("Not enough Favours.");
		}
		
	},
	
	BuyADoEBribe: function() {
	
		if (Engine.Player.Favour >= Engine.Player.DoEBribeCost) {
			Engine.Player.Favour -= Engine.Player.DoEBribeCost;
			Engine.Player.DoEBribe++;
			Engine.Player.DoEBribeCost = Math.ceil(Engine.Player.DoEBribeCost*1.5);
			
			Engine.Display.Favour.innerHTML = Engine.numberWithCommas(Engine.Player.Favour);
			Engine.Display.DoEBribeCost.innerHTML = Engine.numberWithCommas(Engine.Player.DoEBribeCost);
			Engine.Display.DoEBribe.innerHTML = Engine.Player.DoEBribe;
			Engine.Status("Department of Energy Politician Bribed.");
		} else {
			Engine.Status("Not enough Favours.");
		}
		
	},
	
	BuyAChopShop: function() {
	
		if (Engine.Player.Favour >= Engine.Player.ChopShopCost) {
			Engine.Player.Favour -= Engine.Player.ChopShopCost;
			Engine.Player.ChopShop++;
			Engine.Player.ChopShopCost = Math.ceil(Engine.Player.ChopShopCost*1.5);
			
			Engine.Display.Favour.innerHTML = Engine.numberWithCommas(Engine.Player.Favour);
			Engine.Display.ChopShopCost.innerHTML = Engine.numberWithCommas(Engine.Player.ChopShopCost);
			Engine.Display.ChopShop.innerHTML = Engine.Player.ChopShop;
			Engine.Status("Chop Shop on Payroll.");
		} else {
			Engine.Status("Not enough Favours.");
		}
		
	},
	
	BuyAGenGambling: function() {
	
		if (Engine.Player.Favour >= Engine.Player.GenGamblingCost) {
			Engine.Player.Favour -= Engine.Player.GenGamblingCost;
			Engine.Player.GenGambling++;
			Engine.Player.GenGamblingCost = Math.ceil(Engine.Player.GenGamblingCost*1.5);
			
			Engine.Display.Favour.innerHTML = Engine.numberWithCommas(Engine.Player.Favour);
			Engine.Display.GenGamblingCost.innerHTML = Engine.numberWithCommas(Engine.Player.GenGamblingCost);
			Engine.Display.GenGambling.innerHTML = Engine.Player.GenGambling;
			Engine.Status("Gambling Rights Obtained.");
		} else {
			Engine.Status("Not enough Favours.");
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
			window.location.reload(false);
			
		} else {
		
			Engine.Status("You need atleast $1,000,000 to retire!");
			
		}
	
	},
	
	Favour: function() {
		if (Engine.Player.Money > 1000000) {
			Engine.Player.Favour += Engine.Values.FavourGain;
			Engine.ResetValues();
			Engine.Display.Favour.innerHTML = Engine.Player.Favour;
			
			Engine.Save();
			window.location.reload(false);
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
				Engine.Player.GenCost = 5000*Math.pow(5, Engine.Player.Generations)
			
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
		
		Engine.Player.PlaneFactCost = 1200000;
		
		
		//Coal
		Engine.Player.Coal = 0;
		Engine.Player.CoalMine = 0;
		Engine.Player.CoalDrill = 0;
		Engine.Player.CoalContract = 0;
		Engine.Player.CoalAntiContract = 0;
		Engine.Player.CoalContractMoney = 0;
		
		Engine.Player.CoalMineCost = 50;
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
		Engine.Player.NuclearPlantCost = 750000;
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
		
		Engine.Player.GildedAirportStaff = Engine.Player.Hanger + Engine.Player.Terminal + Engine.Player.GiftShop;
		
		Engine.Player.Hanger = 0;
		Engine.Player.HangerCost = 50000;
		
		Engine.Player.Terminal = 0;
		Engine.Player.TerminalCost = 85000;
		
		Engine.Player.GiftShop = 0;
		Engine.Player.GiftShopCost = 115000;
		
		// Construction
		Engine.Player.Permit = 0;
		Engine.Player.Warehouse = 0;
		Engine.Player.Skyscraper = 0;
		
		Engine.Player.BuildTime = 0;
		
		Engine.Player.WarehouseConsPartCost = 500;
		Engine.Player.WarehouseSpoolCost = 50;
		Engine.Player.WarehouseGlassCost = 500;
		Engine.Player.WarehouseACCost = 10;
		Engine.Player.WarehouseLightbulbCost = 250;
		
		Engine.Player.SkyscraperConsPartCost = 5000;
		Engine.Player.SkyscraperSpoolCost = 300;
		Engine.Player.SkyscraperGlassCost = 10000;
		Engine.Player.SkyscraperACCost = 200;
		Engine.Player.SkyscraperLightbulbCost = 4000;
		
		
		Engine.Player.ThirtySecondCounter = 0;
		
		if (Engine.Player.GildedLicense < 1) {
			Engine.Player.Generations = 0;
			Engine.Player.GenPoints = 0;
			Engine.Player.GenCost = 5000;
			Engine.Player.GenCoal = 0;
			Engine.Player.GenCopper = 1;
			Engine.Player.GenOil = 0;
			Engine.Player.GenGlass = 0;
			Engine.Player.GenPower = 0;
			Engine.Player.GenBuilding = 1;
		};
		
		
		//Refined Silicon
		Engine.Player.Silicon = 0,
		Engine.Player.SiRefinery = 0,
		Engine.Player.SiRefineryCost = 300000,
		Engine.Player.SiliconAntiContract = 0,
		Engine.Player.SiliconContractMoney = 0,
		
		//Advanced Electronic
		Engine.Player.AdvElectronic = 0;
		Engine.Player.AdvElecFact = 0;
		Engine.Player.AdvElecFactCost = 0;
		Engine.Player.AdvElecFactArm = 0;
		Engine.Player.AdvElecContract = 0;
		Engine.Player.AdvElecContractCost = 1000000;
		Engine.Player.AdvElecAntiContract = 0;
		Engine.Player.AdvElecContractMoney = 0;
		
		if (Engine.Player.GildedDirector < 1) {
			Engine.Player.ProgramAutoCar = 1;
			Engine.Player.ProgramAutopilot = 0;
			Engine.Player.ProgramArmEfficiency = 15;
			Engine.Player.ProgramArrayEfficiency = 1;
			Engine.Player.ProgramArrayEfficiencyCost = 20;
			
			//Code
			Engine.Player.Code = 0;
			Engine.Player.Software = 0;
			Engine.Player.SoftwareCost = 3500;
		};
		
		
		//PlayerCrime
		Engine.Player.GenCrime = 0;
		Engine.Player.High = 0;
		Engine.Player.HighTimer = 0;
		
		//PlayerWeed
		Engine.Player.Weed = 0;
		Engine.Player.WeedPlant = 0;
		Engine.Player.WeedPlantCost = 100;
		
		Engine.Player.WeedDealer = 0;
		Engine.Player.WeedDealerCost = 1000;
		
		//PlayerCocaine
		Engine.Player.Coca = 0;
		Engine.Player.CocaPlant = 0;
		Engine.Player.CocaAntiContract = 0;
		Engine.Player.CocaPlantCost = 2500;
		
		Engine.Player.Cocaine = 0;
		Engine.Player.CocaineAntiContract = 0;
		Engine.Player.CocaRefinery = 0;
		Engine.Player.CocaRefineryCost = 8000;
		
		Engine.Player.CocaineDealer = 0;
		Engine.Player.CocaineDealerCost = 30000;
		
		Engine.Player.Crack = 0;
		Engine.Player.CocaineRefinery = 0;
		Engine.Player.CocaineRefineryCost = 80000;
		
		Engine.Player.CrackDealer = 0;
		Engine.Player.CrackDealerCost = 150000;
		
		//PlayerMeth
		Engine.Player.Sudafed = 0;
		Engine.Player.Smurf = 0;
		Engine.Player.SudafedAntiContract = 0;
		Engine.Player.SmurfCost = 50;
		
		Engine.Player.Meth = 0;
		Engine.Player.MethAntiContract = 0;
		Engine.Player.MethRefinery = 0;
		Engine.Player.MethRefineryCost = 1000000;
		Engine.Player.MethDealer = 0;
		Engine.Player.MethDealerCost = 200000;
		
		//Guns
		Engine.Player.SmallArm = 0;
		Engine.Player.SmallArmFactory = 0;
		Engine.Player.SmallArmFactoryCost = 0;
		
		Engine.Player.HeavyArm = 0;
		Engine.Player.HeavyArmFactory = 0;
		Engine.Player.HeavyArmFactoryCost = 0;
		
		//Ammo
		Engine.Player.Saltpeter = 0;
		Engine.Player.SaltpeterMine = 0;
		Engine.Player.SaltpeterMineCost = 0;
		
		Engine.Player.Gunpowder = 0;
		Engine.Player.GunpowderFactory = 0;
		Engine.Player.GunpowderFactoryCost = 0;
		
		Engine.Player.BulletFactory = 0;
		Engine.Player.BulletFactoryS = 0;
		Engine.Player.BulletFactoryH = 0;
		Engine.Player.SmallCaliber = 0;		
		Engine.Player.HighCaliber = 0;
	},
	
	// We need a new function for save
	DebugMenu: function() {
		if (Engine.Player.DebugMenu == "") {
			Engine.Player.DebugMenu = "Debug Menu On";
		} else {
			Engine.Player.DebugMenu = "";
		}
		
	},
	Testing: function() {
		if (Engine.Player.DebugMenu == "Debug Menu On") {
			Engine.Player.Money = 15000000000000000000000000000000000;
			Engine.Player.GoldCoin = 15000000000000000000000000000000000;
			Engine.Player.Favour = 15000000000000000000000000000000000;
		}
		
	},
	
	// We need a new function for save
	Save: function() {
		var tmpSavefile = JSON.stringify(Engine.Player);
		
		window.localStorage.setItem("VMsavefile", tmpSavefile);
		
		Engine.Status("Saved!");
		
	},
	
	// And we need a new function for load
	Load: function() {
		
		if (!window.localStorage.getItem("VMsavefile")) {
			
			Engine.Status("No save file present");
			
		} else {
			
			var tmpSavefile = window.localStorage.getItem("VMsavefile");
			
			Engine.Player = JSON.parse(tmpSavefile);
			
			Engine.Status("Loaded successfully!")
				
			
		}
	},
	
	Delete: function() {
		
		if (!window.localStorage.getItem("VMsavefile")) {
			
			Engine.Status("No save file present for deletion");
			
		} else {
			
			window.localStorage.removeItem("VMsavefile");
			
			Engine.Status("Deleted successfully!");
			
		}
		
	},
	
	IdleTimer: function() {
		Engine.TimeNow = new Date().getTime();		
		var timeDifference = Engine.TimeNow - Engine.TimeThen - Engine.Ticks;
		while (timeDifference >= Engine.IdleSpeed) {
			//Time
			Engine.Player.SecondHolder++;
			if (Engine.Player.SecondHolder == 60) {
				Engine.Player.SecondHolder = 0;
				Engine.Player.MinuteHolder++;
				Engine.Player.MinuteHolder = Engine.checkTime(Engine.Player.MinuteHolder);
			}
			if (Engine.Player.MinuteHolder == 60) {
				Engine.Player.MinuteHolder = 0;
				Engine.Player.HourHolder++;
			}
			Engine.Player.SecondHolder = Engine.checkTime(Engine.Player.SecondHolder);
			
			Engine.Display.HourHolder.innerHTML = Engine.Player.HourHolder;
			Engine.Display.MinuteHolder.innerHTML = Engine.Player.MinuteHolder;
			Engine.Display.SecondHolder.innerHTML = Engine.Player.SecondHolder;
			
			Engine.AutoSave++;
			Engine.TwoSecondCounter++;
			Engine.Player.ThirtySecondCounter++;
			if (Engine.Player.HighTimer > 0) {
				Engine.Player.HighTimer--;
				if (Engine.Player.HighTimer == 0) {
					Engine.Player.High = 0;
				} else {
					Engine.Player.High = 1;
				}
			}
			
			
			if (Engine.Player.ThirtySecondCounter > 29) {
				if (Engine.Player.NoCrime == 0) {
				if (Engine.Player.Money == 150) {
					if (Engine.Values.MoneyPS == 0) {
						if (Engine.Player.IronMine + Engine.Player.CopperMine + Engine.Player.CoalMine == 0) {
							Engine.Modal = document.getElementById('CrimeModal');
							Engine.Modal.style.display = "block";
						}
					}
				}
				}
			}
						
				
			if (Engine.Player.Money < 0) {
				if (Engine.Player.GoldCoin > 0) {
					Engine.Player.GoldCoin--;
					Engine.Player.Money += 50000;
					Engine.Status("Sold a gold coin to stay in business!");
					Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				} else {
					window.localStorage.removeItem("VMsavefile");
					var modal = document.getElementById('myModal');
					modal.style.display = "block";
					Engine.AutoSave = 0
				}
			}
			
			if (Engine.AutoSave >= 30) {
				var tmpSavefile = JSON.stringify(Engine.Player);
		
				window.localStorage.setItem("VMsavefile", tmpSavefile);
				
				Engine.Status("Autosaved!");
				
				Engine.AutoSave = 0
			}
			
			if (isNaN(Engine.Player.Money) == true){
				Engine.Player.Money = Engine.Player.CheckMoney;
			} else {
				Engine.Player.CheckMoney = Engine.Player.Money;
			}
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.GenCoalStatus.innerHTML = "Unlocked";
				Engine.Clickables.UnlockCoal.className = "swButtonUnlocked";
			} else {
				Engine.Values.GenCoalStatus.innerHTML = "Locked";
			}
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.GenOilStatus.innerHTML = "Unlocked";
				Engine.Clickables.UnlockOil.className = "swButtonUnlocked";
				Engine.Values.GenOilStatus2.innerHTML = "";
			} else {
				Engine.Values.GenOilStatus.innerHTML = "Locked";
				Engine.Values.GenOilStatus2.innerHTML = "The Oil Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenGlass > 0) {
				Engine.Values.GenGlassStatus.innerHTML = "Unlocked";
				Engine.Clickables.UnlockGlass.className = "swButtonUnlocked";
				Engine.Values.GenGlassStatus2.innerHTML = "";
			} else {
				Engine.Values.GenGlassStatus.innerHTML = "Locked";
				Engine.Values.GenGlassStatus2.innerHTML = "The Glass Branch is currently LOCKED";
			}
			
			if (Engine.Player.GenPower > 0) {
				Engine.Values.GenPowerStatus.innerHTML = "Unlocked";
				Engine.Clickables.UnlockPower.className = "swButtonUnlocked";
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
				Engine.Values.DealershipStatus2.className = "swHideWords";
			} else {
				Engine.Values.DealershipStatus2.innerHTML = "Build a Dealership to build:";
			}
			
			
			if (Engine.Player.Airport > 0) {
				Engine.Values.AirportStatus.innerHTML = "Airport Owned";
				Engine.Values.AirportStatus2.className = "swHideWords";
			} else {
				Engine.Values.AirportStatus.innerHTML = "Cost: 5 Empty Lots + $3,000,000";
				Engine.Values.AirportStatus2.innerHTML = "Build an Airport to build:";
			}
			
			
			if (Engine.Player.GildedLicense > 0) {
				Engine.Values.GildedLicenseStatus.innerHTML = "Gilded License Owned";
			} else {
				Engine.Values.GildedLicenseStatus.innerHTML = "Cost: 20 Gold Coins";
			}
			
			
			if (Engine.Player.ProgramAutoCar == 2) {
				Engine.Display.ProgramAutoCar.innerHTML = "Program Installed";
			} else {
				Engine.Display.ProgramAutoCar.innerHTML = "Cost: 20 Software";
			}
			
			
			if (Engine.Player.ProgramAutopilot == 1) {
				Engine.Display.ProgramAutopilot.innerHTML = "Program Installed";
			} else {
				Engine.Display.ProgramAutopilot.innerHTML = "Cost: 20 Software";
			}
			
			
			if (Engine.Player.ProgramArmEfficiency == 9) {
				Engine.Display.ProgramArmEfficiency.innerHTML = "Program Installed";
			} else {
				Engine.Display.ProgramArmEfficiency.innerHTML = "Cost: 20 Software";
			}
			
			
			if (Engine.Player.GenGambling == 1) {
				Engine.Display.GenGambling.innerHTML = "Rights Obtained";
			} else {
				Engine.Display.GenGambling.innerHTML = "Cost: 100 Favours";
			}
			
			
			//ContractShit
			
			Engine.Player.ContractShift = (1+Math.sqrt(Engine.Player.Office)/5)*(1 + Engine.Player.Hitman*0.3);
			
			Engine.Player.IronContractMoney = Math.ceil(20*(Engine.Player.ContractShift));
			Engine.Player.RefIronContractMoney = Math.ceil(90*(Engine.Player.ContractShift));
			Engine.Player.MotorContractMoney = Math.ceil(175*(Engine.Player.ContractShift));
			Engine.Player.CarContractMoney = Math.ceil(4750*(Engine.Player.ContractShift));
			
			Engine.Player.CoalContractMoney = Math.ceil(25*(Engine.Player.ContractShift));
			Engine.Player.SteelContractMoney = Math.ceil(70*(Engine.Player.ContractShift));
			Engine.Player.MechPartContractMoney = Math.ceil(200*(Engine.Player.ContractShift));
			Engine.Player.ACContractMoney = Math.ceil(2800*(Engine.Player.ContractShift));
			Engine.Player.ConsPartContractMoney = Math.ceil(7000*(Engine.Player.ContractShift));
			
			Engine.Player.CopperContractMoney = Math.ceil(15*(Engine.Player.ContractShift));
			Engine.Player.RefCopperContractMoney = Math.ceil(45*(Engine.Player.ContractShift));
			Engine.Player.SpoolContractMoney = Math.ceil(300*(Engine.Player.ContractShift));
			Engine.Player.ElecContractMoney = Math.ceil(700*(Engine.Player.ContractShift));
			
			Engine.Player.OilContractMoney = Math.ceil(60*(Engine.Player.ContractShift));
			Engine.Player.GasContractMoney = Math.ceil(60*(Engine.Player.ContractShift));
			Engine.Player.PlasticContractMoney = Math.ceil(75*(Engine.Player.ContractShift));
			
			Engine.Player.SandContractMoney = Math.ceil(600*(Engine.Player.ContractShift));
			Engine.Player.GlassContractMoney = Math.ceil(1000*(Engine.Player.ContractShift));
			Engine.Player.LightbulbContractMoney = Math.ceil(1250*(Engine.Player.ContractShift));
			
			Engine.Player.RawCarPS = Engine.Player.CarFact*2 + Engine.Player.CarFactArm*6 - Engine.Player.Dealership*10;
			Engine.Player.CarDealerMoney = Math.ceil(10000*(1 + Engine.Player.DealerShift))*Engine.Player.ProgramAutoCar;

			Engine.Player.AirportMoney = Math.ceil((400+(Engine.Player.Terminal*10) + (Engine.Player.ProgramAutopilot*100)) * (1 + (Engine.Player.GiftShop*0.1)));
			
			Engine.Player.SiliconContractMoney = Math.ceil(4000*(Engine.Player.ContractShift));
			Engine.Player.AdvElecContractMoney = Math.ceil(4500*(Engine.Player.ContractShift));
			
			Engine.Player.DrugShift = (1+(Engine.Player.ArmDealersSmall*0.2)+(Engine.Player.ArmDealersHeavy*0.35));
			
			Engine.Player.WeedPrice = 10*Engine.Player.DrugShift;
			Engine.Player.CocainePrice = 900*Engine.Player.DrugShift;
			Engine.Player.CrackPrice = 7000*Engine.Player.DrugShift;
			Engine.Player.MethPrice = 30000*Engine.Player.DrugShift;

			
			
			Engine.TillAutoSave = 30 - Engine.AutoSave;
			Engine.Display.TillAutoSave.innerHTML = Engine.TillAutoSave;
		
			//Tick Iron
			
			Engine.Player.Iron += Engine.Player.IronMine*5;
			Engine.Player.Iron += Engine.Player.IronDrill*20;
			Engine.Player.Iron += Engine.Player.GildedIronMine*10;
			Engine.Player.Money += Engine.Player.IronContract*Engine.Player.IronContractMoney;
			
			Engine.Player.Iron -= Engine.Player.IronContract*10;
			Engine.Player.Iron -= Engine.Player.IRefinery*20;
			Engine.Player.Iron -= Engine.Player.CombIRefinery*40;
			
			Engine.Player.Iron -= Engine.Player.SRefinery*10;
			Engine.Player.Iron -= Engine.Player.CombSRefinery*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Iron -= Engine.Player.GildedSRefinery*10;
				Engine.Player.Iron -= Engine.Player.GildedIRefinery*20;
			}
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.IronPS = Engine.Player.IronMine*5 + Engine.Player.IronDrill*20 + Engine.Player.GildedIronMine*10 - Engine.Player.IronContract*10 - Engine.Player.IRefinery*20 - Engine.Player.SRefinery*10 - Engine.Player.CombIRefinery*40 - Engine.Player.CombSRefinery*30 - Engine.Player.GildedIRefinery*20 - Engine.Player.GildedSRefinery*10;
			} else {
				Engine.Values.IronPS = Engine.Player.IronMine*5 + Engine.Player.IronDrill*20 + Engine.Player.GildedIronMine*10 - Engine.Player.IronContract*10 - Engine.Player.IRefinery*20 - Engine.Player.SRefinery*10 - Engine.Player.CombIRefinery*40 - Engine.Player.CombSRefinery*30;
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
			
			//Tick Refined Iron
			Engine.Player.RefIron += Engine.Player.IRefinery*10;
			Engine.Player.RefIron += Engine.Player.CombIRefinery*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.RefIron += Engine.Player.GildedIRefinery*10;
			}
			Engine.Player.Money += Engine.Player.RefIronContract*Engine.Player.RefIronContractMoney;
			
			Engine.Player.RefIron -= Engine.Player.RefIronContract*10;
			Engine.Player.RefIron -= Engine.Player.MotorFact*10;
			Engine.Player.RefIron -= Engine.Player.MotorFactArm*30;
			Engine.Player.RefIron -= Engine.Player.SmallArmFactory*15;
			Engine.Player.RefIron -= Engine.Player.HeavyArmFactory*15;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.RefIronPS = Engine.Player.IRefinery*10 + Engine.Player.CombIRefinery*30 + Engine.Player.GildedIRefinery*10 - Engine.Player.RefIronContract*10 - Engine.Player.MotorFact*10 - Engine.Player.MotorFactArm*30 - Engine.Player.SmallArmFactory*15 - Engine.Player.HeavyArmFactory*15;
			}
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
			
			//Tick Motor
			Engine.Player.Motor += Engine.Player.MotorFact*1;
			Engine.Player.Motor += Engine.Player.MotorFactArm*3;
			Engine.Player.Money += Engine.Player.MotorContract*Engine.Player.MotorContractMoney;
			if (Engine.Player.Dealership > 0){
				Engine.Player.Motor += Engine.Player.ChopShop;
			};
			
			Engine.Player.Motor -= Engine.Player.MotorContract*1;
			Engine.Player.Motor -= Engine.Player.ACFact*2;
			Engine.Player.Motor -= Engine.Player.ACFactArm*6;
			Engine.Player.Motor -= Engine.Player.CarFact*2;
			Engine.Player.Motor -= Engine.Player.CarFactArm*6;
			Engine.Player.Motor -= Engine.Player.PlaneFact*10;
			
			Engine.Values.MotorPS = Engine.Player.MotorFact*1 + Engine.Player.MotorFactArm*3 - Engine.Player.MotorContract*1 - Engine.Player.ACFact*2 - Engine.Player.ACFactArm*6 - Engine.Player.CarFact*2 - Engine.Player.CarFactArm*6 - Engine.Player.PlaneFact*10;
			
			if (Engine.Player.Dealership > 0){
				Engine.Values.MotorPS = Engine.Player.MotorFact*1 + Engine.Player.MotorFactArm*3 + Engine.Player.ChopShop - Engine.Player.MotorContract*1 - Engine.Player.ACFact*2 - Engine.Player.ACFactArm*6 - Engine.Player.CarFact*2 - Engine.Player.CarFactArm*6 - Engine.Player.PlaneFact*10;
			};
			
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
			
			//Tick Car
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
			
			//Tick Plane
			
			if (Engine.Player.ThirtySecondCounter > (29 - Engine.Player.GildedEngineer)) {
				if (Engine.Player.Plane < Engine.Player.PlaneLimit) {
					Engine.Player.Plane += Engine.Player.PlaneFact*1;
				}
				Engine.Player.ThirtySecondCounter = 0;
			}
			
			
			Engine.Values.PlanePS = Engine.Player.PlaneFact*1;
			Engine.Player.Money += Engine.Player.Plane*Engine.Player.AirportMoney;
			
			
				
			
			//Tick Coal
			Engine.Player.Coal += Engine.Player.CoalMine*3;
			Engine.Player.Coal += Engine.Player.CoalDrill*12;
				Engine.Player.Coal += Engine.Player.GildedCoalMine*6;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Coal -= Engine.Player.GildedSRefinery*9;
			}
			Engine.Player.Money += Engine.Player.CoalContract*Engine.Player.CoalContractMoney;
			
			Engine.Player.Coal -= Engine.Player.CoalContract*10;
			Engine.Player.Coal -= Engine.Player.SRefinery*9;
			Engine.Player.Coal -= Engine.Player.CombSRefinery*27;
			Engine.Player.Coal -= Engine.Player.CoalPlant*30;
			Engine.Player.Coal -= Engine.Player.GunpowderFactory*6;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.CoalPS = Engine.Player.CoalMine*3 + Engine.Player.CoalDrill*12 + Engine.Player.GildedCoalMine*6 - Engine.Player.CoalContract*10 - Engine.Player.SRefinery*9 - Engine.Player.CombSRefinery*27 - Engine.Player.CoalPlant*30 - Engine.Player.GildedSRefinery*9 - Engine.Player.GunpowderFactory*6;
			} else {
				Engine.Values.CoalPS = Engine.Player.CoalMine*3 + Engine.Player.CoalDrill*12 + Engine.Player.GildedCoalMine*6 - Engine.Player.CoalContract*10 - Engine.Player.SRefinery*9 - Engine.Player.CombSRefinery*27 - Engine.Player.CoalPlant*30;
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
			
			//Tick Steel
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
			Engine.Player.Steel -= Engine.Player.HeavyArmFactory*15;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.SteelPS = Engine.Player.SRefinery*10 + Engine.Player.CombSRefinery*30 + Engine.Player.GildedSRefinery*10 - Engine.Player.SteelContract*10 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*30 - Engine.Player.MotorFact*5 - Engine.Player.MotorFactArm*15 - Engine.Player.HeavyArmFactory*15;
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
			
			//Tick Mechanical Part
			Engine.Player.MechPart += Engine.Player.MechPartFact*4;
			Engine.Player.MechPart += Engine.Player.MechPartFactArm*12;
			Engine.Player.Money += Engine.Player.MechPartContract*Engine.Player.MechPartContractMoney;
			if (Engine.Player.Dealership > 0){
				Engine.Player.MechPart += Engine.Player.ChopShop*5;
			};
			
			Engine.Player.MechPart -= Engine.Player.MechPartContract*10;
			Engine.Player.MechPart -= Engine.Player.ACFact*10;
			Engine.Player.MechPart -= Engine.Player.ACFactArm*30;
			Engine.Player.MechPart -= Engine.Player.CarFact*10;
			Engine.Player.MechPart -= Engine.Player.CarFactArm*30;
			Engine.Player.MechPart -= Engine.Player.PlaneFact*70;
			
			Engine.Values.MechPartPS = Engine.Player.MechPartFact*4 + Engine.Player.MechPartFactArm*12 - Engine.Player.MechPartContract*10 - Engine.Player.ACFact*10 - Engine.Player.ACFactArm*30 - Engine.Player.CarFact*10 - Engine.Player.CarFactArm*30 - Engine.Player.PlaneFact*70;
			
			if (Engine.Values.MechPartPS < 0) {
				Engine.Player.MechPart += Engine.Player.MechPartAntiContract*10;
				Engine.Player.Money -= Engine.Player.MechPartAntiContract*Engine.Player.MechPartContractMoney;
				while (Engine.Player.MechPart < 0) {
					if (Engine.Player.MechPartContract > 0) {
						Engine.Player.MechPart += Engine.Player.MechPartContract*10;
						Engine.BreakAMechPartContract();
						Engine.Player.MechPart -= Engine.Player.MechPartContract*10;
					} else {
					
					Engine.Player.MechPartAntiContract++;
					Engine.Player.MechPart += Engine.Player.MechPartAntiContract*10;
					Engine.Player.Money -= Engine.Player.MechPartAntiContract*Engine.Player.MechPartContractMoney;
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
			
			//Tick ConsPart
			Engine.Player.ConsPart += Engine.Player.ConsPartFact*5;
			Engine.Player.Money += Engine.Player.ConsPartContract*Engine.Player.ConsPartContractMoney;
			
			Engine.Player.ConsPart -= Engine.Player.ConsPartContract*10;
			
			Engine.Values.ConsPartPS = Engine.Player.ConsPartFact*5 - Engine.Player.ConsPartContract*10;
			
			if (Engine.Values.ConsPartPS < 0) {
				Engine.Player.ConsPart += Engine.Player.ConsPartAntiContract*10;
				Engine.Player.Money -= Engine.Player.ConsPartAntiContract*Engine.Player.ConsPartContractMoney;
				while (Engine.Player.ConsPart < 0) {
					if (Engine.Player.ConsPartContract > 0) {
						Engine.Player.ConsPart += Engine.Player.ConsPartContract*10;
						Engine.BreakAConsPartContract();
						Engine.Player.ConsPart -= Engine.Player.ConsPartContract*10;
					} else {
					
					Engine.Player.ConsPartAntiContract++;
					Engine.Player.ConsPart += Engine.Player.ConsPartAntiContract*10;
					Engine.Player.Money -= Engine.Player.ConsPartAntiContract*Engine.Player.ConsPartContractMoney;
					Engine.Status("Ran out of Construction Parts! Started an Anti-Contract!");
					}
				}
			} else {
				if (Engine.Player.ConsPartAntiContract > 0) {
					Engine.Player.ConsPartAntiContract = 0;
					Engine.Status("All Construction Part Anti-Contracts broken!");
				}
			}
			
			//Tick AC Unit
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
			Engine.Player.Money += Engine.Player.Warehouse*3000
			Engine.Player.Money += Engine.Player.Skyscraper*42500
			
			
			//Tick Copper
			
			Engine.Player.Copper += Engine.Player.CopperMine*10;
			Engine.Player.Copper += Engine.Player.CopperDrill*40;
				Engine.Player.Copper += Engine.Player.GildedCopperMine*10;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.Copper -= Engine.Player.GildedCRefinery*15;
			}
			Engine.Player.Money += Engine.Player.CopperContract*Engine.Player.CopperContractMoney;
			
			Engine.Player.Copper -= Engine.Player.CopperContract*10;
			Engine.Player.Copper -= Engine.Player.CRefinery*15;
			Engine.Player.Copper -= Engine.Player.CombCRefinery*30;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.CopperPS = Engine.Player.CopperMine*10 + Engine.Player.CopperDrill*40 + Engine.Player.GildedCopperMine*10 - Engine.Player.CopperContract*10 - Engine.Player.CRefinery*15 - Engine.Player.CombCRefinery*30 - Engine.Player.GildedCRefinery*15;
			} else {
				Engine.Values.CopperPS = Engine.Player.CopperMine*10 + Engine.Player.CopperDrill*40 + Engine.Player.GildedCopperMine*10 - Engine.Player.CopperContract*10 - Engine.Player.CRefinery*15 - Engine.Player.CombCRefinery*30;
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
			
			//Tick Refined Copper
			Engine.Player.RefCopper += Engine.Player.CRefinery*10;
			Engine.Player.RefCopper += Engine.Player.CombCRefinery*30;
			if (Engine.Player.GenCoal > 0) {
				Engine.Player.RefCopper += Engine.Player.GildedCRefinery*10;
			}
			Engine.Player.Money += Engine.Player.RefCopperContract*Engine.Player.RefCopperContractMoney;
			
			Engine.Player.RefCopper -= Engine.Player.RefCopperContract*10;
			Engine.Player.RefCopper -= Engine.Player.Spooler*50;
			Engine.Player.RefCopper -= Engine.Player.SpoolerArm*150;
			Engine.Player.RefCopper -= Engine.Player.MechPartFact*5;
			Engine.Player.RefCopper -= Engine.Player.MechPartFactArm*15;
			Engine.Player.RefCopper -= Engine.Player.ConsPartFact*20;
			Engine.Player.RefCopper -= Engine.Player.SmallCaliberFactory*10;
			Engine.Player.RefCopper -= Engine.Player.HighCaliberFactory*20;
			
			if (Engine.Player.GenCoal > 0) {
				Engine.Values.RefCopperPS = Engine.Player.CRefinery*10 + Engine.Player.CombCRefinery*30 + Engine.Player.GildedCRefinery*10 - Engine.Player.RefCopperContract*10 - Engine.Player.Spooler*50 - Engine.Player.SpoolerArm*150 - Engine.Player.MechPartFact*5 - Engine.Player.MechPartFactArm*15 - Engine.Player.ConsPartFact*20 - Engine.Player.SmallCaliberFactory*10 - Engine.Player.HighCaliberFactory*20;
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
			
			//Tick Spool
			Engine.Player.Spool += Engine.Player.Spooler*10;
			Engine.Player.Spool += Engine.Player.SpoolerArm*30;
			Engine.Player.Money += Engine.Player.SpoolContract*Engine.Player.SpoolContractMoney;
			
			Engine.Player.Spool -= Engine.Player.SpoolContract*10;
			Engine.Player.Spool -= Engine.Player.ElecFact*2;
			Engine.Player.Spool -= Engine.Player.AdvElecFact*4;
			Engine.Player.Spool -= Engine.Player.ElecFactArm*6;
			Engine.Player.Spool -= Engine.Player.ACFact*1;
			Engine.Player.Spool -= Engine.Player.ACFactArm*3;
			Engine.Player.Spool -= Engine.Player.LightbulbFact*1;
			Engine.Player.Spool -= Engine.Player.LightbulbFactArm*3;
			
			Engine.Values.SpoolPS = Engine.Player.Spooler*10 + Engine.Player.SpoolerArm*30 - Engine.Player.SpoolContract*10 - Engine.Player.ElecFact*2 - Engine.Player.ACFact*1 - Engine.Player.LightbulbFact*1 - Engine.Player.ElecFactArm*6 - Engine.Player.ACFactArm*3 - Engine.Player.LightbulbFactArm*6 - Engine.Player.AdvElecFact*4;
			
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
			
			//Tick ElecFactory
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
			
			//Tick Oil
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
				Engine.Player.Money -= Engine.Player.OilAntiContract*Engine.Player.OilContractMoney;
				while (Engine.Player.Oil < 0) {
					if (Engine.Player.OilContract > 0) {
						Engine.Player.Oil += Engine.Player.OilContract*10;
						Engine.BreakAOilContract();
						Engine.Player.Oil -= Engine.Player.OilContract*10;
					} else {
					
					Engine.Player.OilAntiContract++;
					Engine.Player.Oil += Engine.Player.OilAntiContract*10;
					Engine.Player.Money -= Engine.Player.OilAntiContract*Engine.Player.OilContractMoney;
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
			
			//Tick Gas
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
			
			
			
			//Tick Plastic
			Engine.Player.Plastic += Engine.Player.PRefinery*4;
			if (Engine.Player.GenOil > 0) {
				Engine.Player.Plastic += Engine.Player.GildedPRefinery*4;
			}
			Engine.Player.Money += Engine.Player.PlasticContract*Engine.Player.PlasticContractMoney;
			
			Engine.Player.Plastic -= Engine.Player.PlasticContract*10;
			Engine.Player.Plastic -= Engine.Player.ElecFact*10;
			Engine.Player.Plastic -= Engine.Player.AdvElecFact*15;
			Engine.Player.Plastic -= Engine.Player.ElecFactArm*30;
			
			if (Engine.Player.GenOil > 0) {
				Engine.Values.PlasticPS = Engine.Player.PRefinery*4 + Engine.Player.GildedPRefinery*4 - Engine.Player.PlasticContract*10 - Engine.Player.ElecFact*10 - Engine.Player.ElecFactArm*30 - Engine.Player.AdvElecFact*5;
			} else {
				Engine.Values.PlasticPS = Engine.Player.PRefinery*4 - Engine.Player.PlasticContract*10 - Engine.Player.ElecFact*10 - Engine.Player.ElecFactArm*30 - Engine.Player.AdvElecFact*5;
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
			
			//Tick Sand
			Engine.Player.Sand += Engine.Player.Shifter*5;
			
			Engine.Player.Sand -= Engine.Player.GlassFurnace*15;
			Engine.Player.Sand -= Engine.Player.SiRefinery*20;
			
			Engine.Values.SandPS = Engine.Player.Shifter*5 - Engine.Player.GlassFurnace*15 - Engine.Player.SiRefinery*20;
						
			if (Engine.Values.SandPS < 0) {
				Engine.Player.Sand += Engine.Player.SandAntiContract*10;
				Engine.Player.Money -= Engine.Player.SandAntiContract*Engine.Player.SandContractMoney;
				while (Engine.Player.Sand < 0) {
					if (Engine.Player.SandContract > 0) {
						Engine.Player.Sand += Engine.Player.SandContract*10;
						Engine.BreakASandContract();
						Engine.Player.Sand -= Engine.Player.SandContract*10;
					} else {
					
					Engine.Player.SandAntiContract++;
					Engine.Player.Sand += Engine.Player.SandAntiContract*10;
					Engine.Player.Money -= Engine.Player.SandAntiContract*Engine.Player.SandContractMoney;
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
			
			//Tick Glass
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
			
			//Tick Silicon
			Engine.Player.Silicon += Engine.Player.SiRefinery*5;
			Engine.Player.Silicon -= Engine.Player.AdvElecFact*10;
			
			Engine.Values.SiliconPS = Engine.Player.SiRefinery*5 - Engine.Player.AdvElecFact*10;
			if (Engine.Values.SiliconPS < 0) {
				Engine.Player.Silicon += Engine.Player.SiliconAntiContract*10;
				Engine.Player.Money -= Engine.Player.SiliconAntiContract*Engine.Player.SiliconContractMoney;
				while (Engine.Player.Silicon < 0) {
					if (Engine.Player.SiliconContract > 0) {
						Engine.Player.Silicon += Engine.Player.SiliconContract*10;
						Engine.BreakASiliconContract();
						Engine.Player.Silicon -= Engine.Player.SiliconContract*10;
					} else {
					
					Engine.Player.SiliconAntiContract++;
					Engine.Player.Silicon += Engine.Player.SiliconAntiContract*10;
					Engine.Player.Money -= Engine.Player.SiliconAntiContract*Engine.Player.SiliconContractMoney;
					Engine.Status("Ran out of Silicon! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.SiliconAntiContract > Math.ceil(Engine.Values.SiliconPS/-10)) {
					Engine.Player.SiliconAntiContract--;
					Engine.Status("A Silicon Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.SiliconAntiContract > 0) {
					Engine.Player.SiliconAntiContract = 0;
					Engine.Status("All Silicon Anti-Contracts broken!");
				}
			}
			
			//Tick AdvElecFactory
			Engine.Player.AdvElectronic += Engine.Player.AdvElecFact*10;
			Engine.Player.Money += Engine.Player.AdvElecContract*Engine.Player.AdvElecContractMoney;
			
			Engine.Player.AdvElectronic -= Engine.Player.AdvElecContract*10;
			
			Engine.Values.AdvElectronicPS = Engine.Player.AdvElecFact*10 - Engine.Player.AdvElecContract*10;
			
			if (Engine.Values.AdvElectronicPS < 0) {
				Engine.Player.AdvElectronic += Engine.Player.AdvElecAntiContract*10;
				Engine.Player.Money -= Engine.Player.AdvElecAntiContract*Engine.Player.AdvElecContractMoney;
				while (Engine.Player.AdvElectronic < 0) {
					if (Engine.Player.AdvElectronicContract > 0) {
						Engine.Player.AdvElectronic += Engine.Player.AdvElecContract*10;
						Engine.BreakAAdvElectronicContract();
						Engine.Player.AdvElectronic -= Engine.Player.AdvElecContract*10;
					} else {
					
					Engine.Player.AdvElecAntiContract++;
					Engine.Player.AdvElectronic += Engine.Player.AdvElecAntiContract*10;
					Engine.Player.Money -= Engine.Player.AdvElecAntiContract*Engine.Player.AdvElecContractMoney;
					Engine.Status("Ran out of Advanced Electronics! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.AdvElecAntiContract > Math.ceil(Engine.Values.AdvElectronicPS/-10)) {
					Engine.Player.AdvElecAntiContract--;
					Engine.Status("An Advanced Electronic Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.AdvElecAntiContract > 0) {
					Engine.Player.AdvElecAntiContract = 0;
					Engine.Status("All Advanced Electronic Anti-Contracts broken!");
				}
			}
			
			//Tick Code
			Engine.Player.Code += Engine.Player.GildedProgrammer*10;
			
			Engine.Values.CodePS = Engine.Player.GildedProgrammer*10;
			
			if (Engine.Player.GildedDirector > 0){
				if (Engine.Player.Code > Engine.Player.SoftwareCost){
					Engine.Player.Code -= Engine.Player.SoftwareCost;
					Engine.Player.Software++;
					Engine.Player.SoftwareCost = Math.ceil(Engine.Player.SoftwareCost*1.05);
				}
			}
			
			//Tick Weed
			Engine.Player.Weed += Engine.Player.WeedPlant;
			Engine.Player.Weed += Engine.Player.WeedFarm*40;
			Engine.Player.Weed -= Engine.Player.WeedDealer*5;
			Engine.Player.Money += Math.ceil(Engine.Player.WeedDealer*5*(Engine.Player.WeedPrice*0.9));
			
			while (Engine.Player.Weed < 0) {
				Engine.Player.Weed += Engine.Player.WeedDealer*5;
				Engine.Player.WeedDealer--;
				Engine.Player.Weed -= Engine.Player.WeedDealer*5;
				Engine.Status("Ran out of Weed! Lost a Dealer!");
			}
			
			//Tick Cocaine
			Engine.Player.Coca += Engine.Player.CocaPlant*2;
			Engine.Player.Coca += Engine.Player.CocaFarm*80;
			Engine.Player.Coca -= Engine.Player.CocaRefinery*10;
			
			Engine.Player.Cocaine += Engine.Player.CocaRefinery*2;
			Engine.Player.Cocaine -= Engine.Player.CocaineDealer*5;
			Engine.Player.Cocaine -= Engine.Player.CocaineRefinery*4;
			Engine.Player.Money += Math.ceil(Engine.Player.CocaineDealer*5*(Engine.Player.CocainePrice*0.9));
			
			Engine.Player.Crack += Engine.Player.CocaineRefinery;
			Engine.Player.Crack -= Engine.Player.CrackDealer*5;
			Engine.Player.Money += Math.ceil(Engine.Player.CrackDealer*5*(Engine.Player.CrackPrice*0.9));
			
			Engine.Values.CocaPS = Engine.Player.CocaPlant*2 + Engine.Player.CocaFarm*80 - Engine.Player.CocaRefinery*10;
			
			Engine.Values.CocainePS = Engine.Player.CocaRefinery*2 - Engine.Player.CocaineDealer*5 - Engine.Player.CocaineRefinery*4;
			
			Engine.Values.CrackPS = Engine.Player.CocaineRefinery - Engine.Player.CrackDealer*5;
			
			if (Engine.Values.CocaPS < 0) {
				Engine.Player.Coca += Engine.Player.CocaAntiContract*10;
				Engine.Player.Money -= Engine.Player.CocaAntiContract*1400;
				while (Engine.Player.Coca < 0) {
					
					Engine.Player.CocaAntiContract++;
					Engine.Player.Coca += Engine.Player.CocaAntiContract*10;
					Engine.Player.Money -= Engine.Player.CocaAntiContract*1400;
					Engine.Status("Ran out of Coca! Started an Anti-Contract!");
				}
				if (Engine.Player.CocaAntiContract > Math.ceil(Engine.Values.CocaPS/-10)) {
					Engine.Player.CocaAntiContract--;
					Engine.Status("An Coca Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.CocaAntiContract > 0) {
					Engine.Player.CocaAntiContract = 0;
					Engine.Status("All Coca Anti-Contracts broken!");
				}
			}
			
			while (Engine.Player.Cocaine < 0 && Engine.Player.CocaineDealer > 0) {
				Engine.Player.Cocaine += Engine.Player.CocaineDealer*5;
				Engine.Player.CocaineDealer--;
				Engine.Player.Cocaine -= Engine.Player.CocaineDealer*5;
				Engine.Status("Ran out of Cocaine! Lost a Dealer!");
			}
			
			if (Engine.Values.CocainePS < 0) {
				Engine.Player.Cocaine += Engine.Player.CocaineAntiContract*10;
				Engine.Player.Money -= Engine.Player.CocaineAntiContract*10000;
				while (Engine.Player.Cocaine < 0) {
					if (Engine.Player.AdvElectronicContract > 0) {
						Engine.Player.AdvElectronic += Engine.Player.AdvElecContract*10;
						Engine.BreakAAdvElectronicContract();
						Engine.Player.AdvElectronic -= Engine.Player.AdvElecContract*10;
					} else {
					
					Engine.Player.CocaineAntiContract++;
					Engine.Player.Cocaine += Engine.Player.CocaineAntiContract*10;
					Engine.Player.Money -= Engine.Player.CocaineAntiContract*10000;
					Engine.Status("Ran out of Cocaine! Started an Anti-Contract!");
					}
				}
				if (Engine.Player.CocaineAntiContract > Math.ceil(Engine.Values.CocainePS/-10)) {
					Engine.Player.CocaineAntiContract--;
					Engine.Status("An Cocaine Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.CocaineAntiContract > 0) {
					Engine.Player.CocaineAntiContract = 0;
					Engine.Status("All Cocaine Anti-Contracts broken!");
				}
			}
			
			while (Engine.Player.Crack < 0) {
				Engine.Player.Crack += Engine.Player.CrackDealer*5;
				Engine.Player.CrackDealer--;
				Engine.Player.Crack -= Engine.Player.CrackDealer*5;
				Engine.Status("Ran out of Crack! Lost a Dealer!");
			}
			
			//Tick Meth
			Engine.Player.Sudafed += Engine.Player.Smurf*10;
			Engine.Player.Sudafed -= Engine.Player.MethRefinery*30;
			
			Engine.Player.Meth += Engine.Player.MethRefinery*5;
			Engine.Player.Money -= Engine.Player.MethRefinery*50000;
			Engine.Player.Meth -= Engine.Player.MethDealer*5;
			Engine.Player.Money += Math.ceil(Engine.Player.MethDealer*5*(Engine.Player.MethPrice*0.9));
			
			Engine.Values.SudafedPS = Engine.Player.Smurf*10 - Engine.Player.MethRefinery*30;
			
			Engine.Values.MethPS = Engine.Player.MethRefinery*5 - Engine.Player.MethDealer*5;
			
			if (Engine.Values.SudafedPS < 0) {
				Engine.Player.Sudafed += Engine.Player.SudafedAntiContract*10;
				Engine.Player.Money -= Engine.Player.SudafedAntiContract*5000;
				while (Engine.Player.Sudafed < 0) {
					
					Engine.Player.SudafedAntiContract++;
					Engine.Player.Sudafed += Engine.Player.SudafedAntiContract*10;
					Engine.Player.Money -= Engine.Player.SudafedAntiContract*5000;
					Engine.Status("Ran out of Sudafed! Started an Anti-Contract!");
				}
				if (Engine.Player.SudafedAntiContract > Math.ceil(Engine.Values.SudafedPS/-10)) {
					Engine.Player.SudafedAntiContract--;
					Engine.Status("An Sudafed Anti-Contract was broken!");
				}
			} else {
				if (Engine.Player.SudafedAntiContract > 0) {
					Engine.Player.SudafedAntiContract = 0;
					Engine.Status("All Sudafed Anti-Contracts broken!");
				}
			}
			
			//Tick Guns
			Engine.Player.SmallArm += Engine.Player.SmallArmFactory*1;
			Engine.Values.SmallArmPS = Engine.Player.SmallArmFactory*1;
			Engine.Player.HeavyArm += Engine.Player.HeavyArmFactory*1;
			Engine.Values.HeavyArmPS = Engine.Player.HeavyArmFactory*1;
			
			
			//Tick Ammo
			Engine.Player.Saltpeter += Engine.Player.SaltpeterMine*10;
			Engine.Player.Saltpeter -= Engine.Player.GunpowderFactory*5;
			Engine.Values.SaltpeterPS = Engine.Player.SaltpeterMine*10 - Engine.Player.GunpowderFactory*5;
			
			Engine.Player.Gunpowder += Engine.Player.GunpowderFactory*10;
			Engine.Player.Gunpowder -= Engine.Player.SmallCaliberFactory*10;
			Engine.Player.Gunpowder -= Engine.Player.HighCaliberFactory*20;
			Engine.Values.GunpowderPS = Engine.Player.GunpowderFactory*10 - Engine.Player.SmallCaliberFactory*10 - Engine.Player.HighCaliberFactory*20;
			
			Engine.Player.SmallCaliber += Engine.Player.SmallCaliberFactory*10;
			Engine.Values.SmallCaliberPS = Engine.Player.SmallCaliberFactory*10;
			Engine.Player.HighCaliber += Engine.Player.HighCaliberFactory*10;
			Engine.Values.HighCaliberPS = Engine.Player.HighCaliberFactory*10;
			
			//Tick Power
			Engine.Player.SolarPlantOutput = 5*Engine.Player.ProgramArrayEfficiency
			Engine.Player.NuclearPlantBaseCost = Math.ceil(750000/(1 + Engine.Player.DoEBribe*0.35));
			Engine.Player.NuclearPlantCost = Math.ceil(Engine.Player.NuclearPlantBaseCost * Math.pow(1.5, Engine.Player.NuclearPlant));
			
			Engine.Player.MWh = Engine.Player.CoalPlant*40 + (Engine.Player.SolarPlant*Engine.Player.SolarPlantOutput) + Engine.Player.SolarRoad*10 + Engine.Player.NuclearPlant*125 - 
				//Refinery PowerPS
				(Engine.Player.IRefinery + Engine.Player.SRefinery + Engine.Player.CRefinery + Engine.Player.CombIRefinery + Engine.Player.CombSRefinery + Engine.Player.CombCRefinery + Engine.Player.GRefinery + Engine.Player.PRefinery + Engine.Player.CocaRefinery)*1 - 
				//Factory PowerPS
				(Engine.Player.MotorFact + Engine.Player.MechPartFact + Engine.Player.ConsPartFact + Engine.Player.Spooler + Engine.Player.ElecFact + Engine.Player.LightbulbFact + Engine.Player.ACFact + Engine.Player.CarFact + Engine.Player.SiRefinery + Engine.Player.AdvElecFact + Engine.Player.GunpowderFactory + Engine.Player.SmallArmFactory + Engine.Player.HeavyArmFactory + Engine.Player.SmallCaliberFactory + Engine.Player.HighCaliberFactory)*3 - 
				//Arm PowerPS
				(Engine.Player.MotorFactArm + Engine.Player.MechPartFactArm + Engine.Player.SpoolerArm + Engine.Player.ElecFactArm + Engine.Player.LightbulbFactArm + Engine.Player.ACFactArm + Engine.Player.CarFactArm)*Engine.Player.ProgramArmEfficiency - 
				//MiscPowerPS
				(Engine.Player.Shifter + Engine.Player.Workshop + Engine.Player.Apartment + Engine.Player.Office + Engine.Player.Dealership)*2 - Engine.Player.Airport*30 - Engine.Player.GiftShop*2 - Engine.Player.CocaineRefinery*5 - Engine.Player.MethRefinery*15;
			
			Engine.Values.MWhMoney = Engine.numberWithCommas(Math.round(Engine.Player.MWh*Engine.Player.MWhCost));
			
			Engine.Player.Money += Math.round(Engine.Player.MWh*Engine.Player.MWhCost);
			
			
			Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
			
			//Iron
			Engine.Display.Iron.innerHTML = Engine.numberWithCommas(Engine.Player.Iron);
			Engine.Display.IronMine.innerHTML = Engine.numberWithCommas(Engine.Player.IronMine);
			Engine.Display.IronMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.IronMineCost);
			
			Engine.Display.IronDrill.innerHTML = Engine.numberWithCommas(Engine.Player.IronDrill);
			
			Engine.Display.IronContract.innerHTML = Engine.numberWithCommas(Engine.Player.IronContract);
			Engine.Display.IronContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.IronContractCost);
			
			Engine.Display.IronAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.IronAntiContract);
			
			Engine.Display.IronPS.innerHTML = Engine.numberWithCommas(Engine.Values.IronPS);
			
			//RefIron
			Engine.Display.RefIron.innerHTML = Engine.numberWithCommas(Engine.Player.RefIron);
			Engine.Display.IRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.IRefinery);
			Engine.Display.IRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.IRefineryCost);
			
			Engine.Display.CombIRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombIRefinery);
			
			Engine.Display.RefIronContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronContract);
			Engine.Display.RefIronContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronContractCost);
			
			Engine.Display.RefIronAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronAntiContract);
			
			Engine.Display.RefIronPS.innerHTML = Engine.numberWithCommas(Engine.Values.RefIronPS);
			
			//Motor
			Engine.Display.Motor.innerHTML = Engine.numberWithCommas(Engine.Player.Motor);
			Engine.Display.MotorFact.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFact);
			Engine.Display.MotorFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFactArm);
			Engine.Display.MotorFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.MotorFactCost);
			
			Engine.Display.MotorContract.innerHTML = Engine.numberWithCommas(Engine.Player.MotorContract);
			Engine.Display.MotorContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.MotorContractCost);
			
			Engine.Display.MotorAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.MotorAntiContract);
			
			Engine.Display.MotorPS.innerHTML = Engine.numberWithCommas(Engine.Values.MotorPS);
			
			//Car
			Engine.Display.Car.innerHTML = Engine.numberWithCommas(Engine.Player.Car);
			Engine.Display.CarFact.innerHTML = Engine.numberWithCommas(Engine.Player.CarFact);
			Engine.Display.CarFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.CarFactArm);
			Engine.Display.CarFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.CarFactCost);
			
			Engine.Display.CarContract.innerHTML = Engine.numberWithCommas(Engine.Player.CarContract);
			Engine.Display.CarContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.CarContractCost);
			Engine.Display.CarContractCost2.innerHTML = Engine.numberWithCommas(Engine.Player.CarContractCost);
			
			Engine.Display.CarAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.CarAntiContract);
			
			Engine.Display.CarPS.innerHTML = Engine.numberWithCommas(Engine.Values.CarPS);
			
			//Plane
			Engine.Display.Plane.innerHTML = Engine.numberWithCommas(Engine.Player.Plane);
			Engine.Display.PlaneFact.innerHTML = Engine.numberWithCommas(Engine.Player.PlaneFact);
			Engine.Display.PlaneFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.PlaneFactCost);
			Engine.Display.ThirtySecondCounter.innerHTML = ((30 - Engine.Player.GildedEngineer) - Engine.Player.ThirtySecondCounter);
			
			Engine.Display.PlanePS.innerHTML = Engine.numberWithCommas(Engine.Values.PlanePS);
			
			//Coal
			Engine.Display.Coal.innerHTML = Engine.numberWithCommas(Engine.Player.Coal);
			Engine.Display.CoalMine.innerHTML = Engine.numberWithCommas(Engine.Player.CoalMine);
			Engine.Display.CoalMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.CoalMineCost);
			
			Engine.Display.CoalDrill.innerHTML = Engine.numberWithCommas(Engine.Player.CoalDrill);
			
			Engine.Display.CoalContract.innerHTML = Engine.numberWithCommas(Engine.Player.CoalContract);
			Engine.Display.CoalContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.CoalContractCost);
			
			Engine.Display.CoalAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.CoalAntiContract);
			
			Engine.Display.CoalPS.innerHTML = Engine.numberWithCommas(Engine.Values.CoalPS);
			Engine.Display.CoalContractCoal.innerHTML = Engine.numberWithCommas(Engine.Values.CoalContractCoal);
			Engine.Display.CoalContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.CoalContractMoney);
			
			//Steel
			Engine.Display.Steel.innerHTML = Engine.numberWithCommas(Engine.Player.Steel);
			Engine.Display.SRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.SRefinery);
			Engine.Display.SRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SRefineryCost);
			
			Engine.Display.CombSRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombSRefinery);
			
			Engine.Display.SteelContract.innerHTML = Engine.numberWithCommas(Engine.Player.SteelContract);
			Engine.Display.SteelContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.SteelContractCost);
			
			Engine.Display.SteelAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.SteelAntiContract);
			
			Engine.Display.SteelPS.innerHTML = Engine.numberWithCommas(Engine.Values.SteelPS);
			Engine.Display.SteelContractSteel.innerHTML = Engine.numberWithCommas(Engine.Values.SteelContractSteel);
			Engine.Display.SteelContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.SteelContractMoney);
			
			//MechPart
			Engine.Display.MechPart.innerHTML = Engine.numberWithCommas(Engine.Player.MechPart);
			Engine.Display.MechPartFact.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFact);
			Engine.Display.MechPartFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFactArm);
			Engine.Display.MechPartFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartFactCost);
			
			Engine.Display.MechPartAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.MechPartAntiContract);
			
			Engine.Display.MechPartPS.innerHTML = Engine.numberWithCommas(Engine.Values.MechPartPS);
			
			//ConsPart
			Engine.Display.ConsPart.innerHTML = Engine.numberWithCommas(Engine.Player.ConsPart);
			Engine.Display.ConsPartFact.innerHTML = Engine.numberWithCommas(Engine.Player.ConsPartFact);
			Engine.Display.ConsPartFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.ConsPartFactCost);
			
			Engine.Display.ConsPartAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.ConsPartAntiContract);
			
			Engine.Display.ConsPartPS.innerHTML = Engine.numberWithCommas(Engine.Values.ConsPartPS);
			
			//AC
			Engine.Display.AC.innerHTML = Engine.numberWithCommas(Engine.Player.AC);
			Engine.Display.ACFact.innerHTML = Engine.numberWithCommas(Engine.Player.ACFact);
			Engine.Display.ACFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.ACFactCost);
			
			Engine.Display.ACFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.ACFactArm);
			
			Engine.Display.ACContract.innerHTML = Engine.numberWithCommas(Engine.Player.ACContract);
			Engine.Display.ACContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.ACContractCost);
			
			Engine.Display.ACAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.ACAntiContract);
			
			Engine.Display.ACPS.innerHTML = Engine.numberWithCommas(Engine.Values.ACPS);
			Engine.Display.ACContractAC.innerHTML = Engine.numberWithCommas(Engine.Values.ACContractAC);
			Engine.Display.ACContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.ACContractMoney);
			
			/*
			========
			HTML Copper
			========
			*/
			
			//Copper
			Engine.Display.Copper.innerHTML = Engine.numberWithCommas(Engine.Player.Copper);
			Engine.Display.CopperMine.innerHTML = Engine.numberWithCommas(Engine.Player.CopperMine);
			Engine.Display.CopperMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.CopperMineCost);
			
			Engine.Display.CopperDrill.innerHTML = Engine.numberWithCommas(Engine.Player.CopperDrill);
			
			Engine.Display.CopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.CopperContract);
			Engine.Display.CopperContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.CopperContractCost);
			
			Engine.Display.CopperAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.CopperAntiContract);
			
			Engine.Display.CopperPS.innerHTML = Engine.numberWithCommas(Engine.Values.CopperPS);
			Engine.Display.CopperContractCopper.innerHTML = Engine.numberWithCommas(Engine.Values.CopperContractCopper);
			Engine.Display.CopperContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.CopperContractMoney);
			
			//RefCopper
			Engine.Display.RefCopper.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopper);
			Engine.Display.CRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CRefinery);
			Engine.Display.CRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.CRefineryCost);
			
			Engine.Display.CombCRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CombCRefinery);
			
			Engine.Display.RefCopperContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperContract);
			Engine.Display.RefCopperContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperContractCost);
			
			Engine.Display.RefCopperAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperAntiContract);
			
			Engine.Display.RefCopperPS.innerHTML = Engine.numberWithCommas(Engine.Values.RefCopperPS);
			Engine.Display.RefCopperContractRefCopper.innerHTML = Engine.numberWithCommas(Engine.Values.RefCopperContractRefCopper);
			Engine.Display.RefCopperContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.RefCopperContractMoney);
			
			//Spool
			Engine.Display.Spool.innerHTML = Engine.numberWithCommas(Engine.Player.Spool);
			Engine.Display.Spooler.innerHTML = Engine.numberWithCommas(Engine.Player.Spooler);
			Engine.Display.SpoolerCost.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolerCost);
			
			Engine.Display.SpoolerArm.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolerArm);
			
			Engine.Display.SpoolContract.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolContract);
			Engine.Display.SpoolContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolContractCost);
			
			Engine.Display.SpoolAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolAntiContract);
			
			Engine.Display.SpoolPS.innerHTML = Engine.numberWithCommas(Engine.Values.SpoolPS);
			Engine.Display.SpoolContractSpool.innerHTML = Engine.numberWithCommas(Engine.Values.SpoolContractSpool);
			Engine.Display.SpoolContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.SpoolContractMoney);
			
			//Electronic
			Engine.Display.Electronic.innerHTML = Engine.numberWithCommas(Engine.Player.Electronic);
			Engine.Display.ElecFact.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFact);
			Engine.Display.ElecFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFactCost);
			
			Engine.Display.ElecFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.ElecFactArm);
			
			Engine.Display.ElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.ElecContract);
			Engine.Display.ElecContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.ElecContractCost);
			
			Engine.Display.ElecAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.ElecAntiContract);
			
			Engine.Display.ElectronicPS.innerHTML = Engine.numberWithCommas(Engine.Values.ElectronicPS);
			Engine.Display.ElecContractElec.innerHTML = Engine.numberWithCommas(Engine.Values.ElecContractElec);
			Engine.Display.ElecContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.ElecContractMoney);
			
			/*
			-----
			HTMLOils
			----
			*/
			
			
			//Oil
			Engine.Display.Oil.innerHTML = Engine.numberWithCommas(Engine.Player.Oil);
			Engine.Display.OilMine.innerHTML = Engine.numberWithCommas(Engine.Player.OilMine);
			Engine.Display.OilMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.OilMineCost);
			
			Engine.Display.OilAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.OilAntiContract);
			
			Engine.Display.OilPS.innerHTML = Engine.numberWithCommas(Engine.Values.OilPS);
			
			//Gas
			Engine.Display.Gas.innerHTML = Engine.numberWithCommas(Engine.Player.Gas);
			Engine.Display.GRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.GRefinery);
			Engine.Display.GRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.GRefineryCost);
			
			Engine.Display.GasContract.innerHTML = Engine.numberWithCommas(Engine.Player.GasContract);
			Engine.Display.GasContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.GasContractCost);
			
			Engine.Display.GasAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.GasAntiContract);
			
			Engine.Display.GasPS.innerHTML = Engine.numberWithCommas(Engine.Values.GasPS);
			Engine.Display.GasContractGas.innerHTML = Engine.numberWithCommas(Engine.Values.GasContractGas);
			Engine.Display.GasContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.GasContractMoney);
			
			//Plastic
			Engine.Display.Plastic.innerHTML = Engine.numberWithCommas(Engine.Player.Plastic);
			Engine.Display.PRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.PRefinery);
			Engine.Display.PRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.PRefineryCost);
			
			Engine.Display.PlasticContract.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticContract);
			Engine.Display.PlasticContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticContractCost);
			
			Engine.Display.PlasticPS.innerHTML = Engine.numberWithCommas(Engine.Values.PlasticPS);
			Engine.Display.PlasticContractPlastic.innerHTML = Engine.numberWithCommas(Engine.Values.PlasticContractPlastic);
			Engine.Display.PlasticContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.PlasticContractMoney);
			
			Engine.Display.PlasticAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticAntiContract);
			
			/*
			-----
			HTMLSand
			----
			*/
			
			
			//Sand
			Engine.Display.Sand.innerHTML = Engine.numberWithCommas(Engine.Player.Sand);
			Engine.Display.Shifter.innerHTML = Engine.numberWithCommas(Engine.Player.Shifter);
			Engine.Display.ShifterMotorCost.innerHTML = Engine.numberWithCommas(Engine.Player.ShifterMotorCost);
			Engine.Display.ShifterMechCost.innerHTML = Engine.numberWithCommas(Engine.Player.ShifterMechCost);
			
			Engine.Display.SandAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.SandAntiContract);
			
			Engine.Display.SandPS.innerHTML = Engine.numberWithCommas(Engine.Values.SandPS);
			
			
			//Glass
			Engine.Display.Glass.innerHTML = Engine.numberWithCommas(Engine.Player.Glass);
			Engine.Display.GlassFurnace.innerHTML = Engine.numberWithCommas(Engine.Player.GlassFurnace);
			
			Engine.Display.GlassContract.innerHTML = Engine.numberWithCommas(Engine.Player.GlassContract);
			Engine.Display.GlassContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.GlassContractCost);
			Engine.Display.GlassAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.GlassAntiContract);
			
			Engine.Display.GlassPS.innerHTML = Engine.numberWithCommas(Engine.Values.GlassPS);
			
			//Lightbulb
			Engine.Display.Lightbulb.innerHTML = Engine.numberWithCommas(Engine.Player.Lightbulb);
			Engine.Display.LightbulbFact.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFact);
			Engine.Display.LightbulbFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFactCost);
			
			Engine.Display.LightbulbFactArm.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbFactArm);
			
			Engine.Display.LightbulbContract.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbContract);
			Engine.Display.LightbulbContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbContractCost);
			
			Engine.Display.LightbulbAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbAntiContract);
			
			Engine.Display.LightbulbPS.innerHTML = Engine.numberWithCommas(Engine.Values.LightbulbPS);
			Engine.Display.LightbulbContractLightbulb.innerHTML = Engine.numberWithCommas(Engine.Values.LightbulbContractLightbulb);
			Engine.Display.LightbulbContractMoney.innerHTML = Engine.numberWithCommas(Engine.Values.LightbulbContractMoney);
			
			
			
			/*
			-----
			HTMLFactory
			----
			*/
			
			Engine.Display.Drill.innerHTML = Engine.Player.Drill;
			Engine.Display.DrillMotorCost.innerHTML = Engine.numberWithCommas(Engine.Player.DrillMotorCost);
			Engine.Display.DrillMechCost.innerHTML = Engine.numberWithCommas(Engine.Player.DrillMechCost);
			
			Engine.Display.Furnace.innerHTML = Engine.Player.Furnace;
			Engine.Display.FurnaceCost.innerHTML = Engine.numberWithCommas(Engine.Player.FurnaceCost);
			
			Engine.Display.Arm.innerHTML = Engine.Player.Arm;
			Engine.Display.ArmMotorCost.innerHTML = Engine.numberWithCommas(Engine.Player.ArmMotorCost);
			Engine.Display.ArmMechCost.innerHTML = Engine.numberWithCommas(Engine.Player.ArmMechCost);
			Engine.Display.ArmElecCost.innerHTML = Engine.numberWithCommas(Engine.Player.ArmElecCost);
			
			Engine.Display.SolarArray.innerHTML = Engine.Player.SolarArray;
			Engine.Display.SolarArrayElecCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArrayElecCost);
			Engine.Display.SolarArrayGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarArrayGlassCost);
			
			
			
			/*
			-----
			HTMLPower
			----
			*/
			
			Engine.Display.MWh.innerHTML = Engine.numberWithCommas(Engine.Player.MWh);
			Engine.Display.MWhMoney.innerHTML = Engine.numberWithCommas(Engine.Values.MWhMoney);
			
			Engine.Display.MWhCost.innerHTML = Engine.numberWithCommas(Engine.Player.MWhCost);
			
			Engine.Display.PowerLine.innerHTML = Engine.numberWithCommas(Engine.Player.PowerLine);
			Engine.Display.PowerLineCost.innerHTML = Engine.numberWithCommas(Engine.Player.PowerLineCost);
			
			Engine.Display.CoalPlant.innerHTML = Engine.numberWithCommas(Engine.Player.CoalPlant);
			Engine.Display.CoalPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.CoalPlantCost);
			
			Engine.Display.SolarPlant.innerHTML = Engine.numberWithCommas(Engine.Player.SolarPlant);
			Engine.Display.SolarPlantOutput.innerHTML = Engine.numberWithCommas(Engine.Player.SolarPlantOutput);
			Engine.Display.SolarPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarPlantCost);
			
			Engine.Display.NuclearPlant.innerHTML = Engine.numberWithCommas(Engine.Player.NuclearPlant);
			Engine.Display.NuclearPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.NuclearPlantCost);
			
			
			
			/*
			-----
			HTMLBuildings
			----
			*/
			//Engine.Display.ContractShift.innerHTML = Engine.Player.ContractShift;
			
			Engine.Display.Land.innerHTML = Engine.numberWithCommas(Engine.Player.Land);
			Engine.Display.LandCost.innerHTML = Engine.numberWithCommas(Engine.Player.LandCost);
			
			Engine.Display.Workshop.innerHTML = Engine.numberWithCommas(Engine.Player.Workshop);
			Engine.Display.WorkshopCost.innerHTML = Engine.numberWithCommas(Engine.Player.WorkshopCost);
			
			Engine.Display.Office.innerHTML = Engine.numberWithCommas(Engine.Player.Office);
			Engine.Display.OfficeCost.innerHTML = Engine.numberWithCommas(Engine.Player.OfficeCost);
			
			
			
			
			/*
			-----
			HTMLCars
			----
			*/
			Engine.Display.Dealership.innerHTML = Engine.numberWithCommas(Engine.Player.Dealership);
			Engine.Display.DealershipCost.innerHTML = Engine.numberWithCommas(Engine.Player.DealershipCost);
			
			Engine.Display.Road.innerHTML = Engine.numberWithCommas(Engine.Player.Road);
			Engine.Display.SolarRoad.innerHTML = Engine.numberWithCommas(Engine.Player.SolarRoad);
			Engine.Display.SolarRoadCost.innerHTML = Engine.numberWithCommas(Engine.Player.SolarRoadCost);
			Engine.Display.CarDealerMoney.innerHTML = Engine.numberWithCommas(Engine.Player.CarDealerMoney);
			
			
			
			/*
			-----
			HTMLPlanes
			----
			*/
			Engine.Display.PlaneLimit.innerHTML = Engine.numberWithCommas(Engine.Player.PlaneLimit);
			Engine.Display.AirportMoney.innerHTML = Engine.numberWithCommas(Engine.Player.AirportMoney);
			Engine.Display.Hanger.innerHTML = Engine.numberWithCommas(Engine.Player.Hanger);
			Engine.Display.HangerCost.innerHTML = Engine.numberWithCommas(Engine.Player.HangerCost);
			Engine.Display.Terminal.innerHTML = Engine.numberWithCommas(Engine.Player.Terminal);
			Engine.Display.TerminalCost.innerHTML = Engine.numberWithCommas(Engine.Player.TerminalCost);
			Engine.Display.GiftShop.innerHTML = Engine.numberWithCommas(Engine.Player.GiftShop);
			Engine.Display.GiftShopCost.innerHTML = Engine.numberWithCommas(Engine.Player.GiftShopCost);
			
			
			
			
			/*
			-----
			HTMLConstruction Workings
			----
			*/
			Engine.Display.Permit.innerHTML = Engine.numberWithCommas(Engine.Player.Permit);
			Engine.Display.PermitCost.innerHTML = Engine.numberWithCommas(Engine.Player.PermitCost);
			Engine.Display.Warehouse.innerHTML = Engine.numberWithCommas(Engine.Player.Warehouse);
			Engine.Display.Skyscraper.innerHTML = Engine.numberWithCommas(Engine.Player.Skyscraper);
			
			
			Engine.Display.WarehouseConsPartCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseConsPartCost);
			Engine.Display.WarehouseGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseGlassCost);
			Engine.Display.WarehouseACCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseACCost);
			Engine.Display.WarehouseSpoolCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseSpoolCost);
			Engine.Display.WarehouseLightbulbCost.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseLightbulbCost);
			
			
			Engine.Display.SkyscraperConsPartCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperConsPartCost);
			Engine.Display.SkyscraperGlassCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperGlassCost);
			Engine.Display.SkyscraperACCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperACCost);
			Engine.Display.SkyscraperSpoolCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperSpoolCost);
			Engine.Display.SkyscraperLightbulbCost.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperLightbulbCost);
			
			
			Engine.Player.WarehouseBuildTime = Engine.Player.WarehouseBuildTimeBase/(1 + (Engine.Player.GildedForeman*0.2));
			Engine.Player.SkyscraperBuildTime = Engine.Player.SkyscraperBuildTimeBase/(1 + (Engine.Player.GildedForeman*0.2));
			
			
			
			
			Engine.Display.WarehouseBuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.WarehouseBuildTime);
			Engine.Display.SkyscraperBuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.SkyscraperBuildTime);
			Engine.Display.BuildTime.innerHTML = Engine.numberWithCommas(Engine.Player.BuildTime);
			
			
			/*
			=======
			HTMLRobotics
			=======
			*/
			
			Engine.Display.Silicon.innerHTML = Engine.numberWithCommas(Engine.Player.Silicon);
			Engine.Display.SiRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.SiRefinery);
			Engine.Display.SiRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SiRefineryCost);
			
			Engine.Display.SiliconAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.SiliconAntiContract);
			
			Engine.Display.SiliconPS.innerHTML = Engine.numberWithCommas(Engine.Values.SiliconPS);
			
			
			//AdvElectronic
			Engine.Display.AdvElectronic.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElectronic);
			Engine.Display.AdvElecFact.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecFact);
			Engine.Display.AdvElecFactCost.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecFactCost);
			
			Engine.Display.AdvElecContract.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecContract);
			Engine.Display.AdvElecContractCost.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecContractCost);
			Engine.Display.AdvElecContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecContractMoney);
			
			Engine.Display.AdvElecAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.AdvElecAntiContract);
			
			Engine.Display.AdvElectronicPS.innerHTML = Engine.numberWithCommas(Engine.Values.AdvElectronicPS);
			
			
			//Code
			Engine.Display.Code.innerHTML = Engine.numberWithCommas(Engine.Player.Code);
			
			Engine.Display.CodePS.innerHTML = Engine.numberWithCommas(Engine.Values.CodePS);
			Engine.Display.Software.innerHTML = Engine.numberWithCommas(Engine.Player.Software);
			Engine.Display.SoftwareCost.innerHTML = Engine.numberWithCommas(Engine.Player.SoftwareCost);
			
			Engine.Display.ProgramArrayEfficiencyCost.innerHTML = Engine.numberWithCommas(Engine.Player.ProgramArrayEfficiencyCost);
			
			
			/*
			-----
			HTMLWeed
			----
			*/
			
			
			Engine.Values.WeedPS = Engine.numberWithCommas(Engine.Player.WeedPlant + Engine.Player.WeedFarm*40 - Engine.Player.WeedDealer*5);
			
			Engine.Display.Weed.innerHTML = Engine.numberWithCommas(Engine.Player.Weed);
			Engine.Display.WeedDealerPrice.innerHTML = Engine.numberWithCommas(Math.ceil(5*(Engine.Player.WeedPrice*0.9)));
			Engine.Display.WeedPS.innerHTML = Engine.numberWithCommas(Engine.Values.WeedPS);
			Engine.Display.WeedPlant.innerHTML = Engine.numberWithCommas(Engine.Player.WeedPlant);
			Engine.Display.WeedPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedPlantCost);
			Engine.Display.WeedFarm.innerHTML = Engine.numberWithCommas(Engine.Player.WeedFarm);
			Engine.Display.WeedFarmCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedFarmCost);
			Engine.Display.WeedDealer.innerHTML = Engine.numberWithCommas(Engine.Player.WeedDealer);
			Engine.Display.WeedDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.WeedDealerCost);
			
			
			/*
			-----
			HTMLCocaine
			----
			*/
			
			Engine.Display.HighTimer.innerHTML = Engine.Player.HighTimer;
			
			
			Engine.Display.Coca.innerHTML = Engine.numberWithCommas(Engine.Player.Coca);
			Engine.Display.CocaPS.innerHTML = Engine.numberWithCommas(Engine.Values.CocaPS);
			Engine.Display.CocaPlant.innerHTML = Engine.numberWithCommas(Engine.Player.CocaPlant);
			Engine.Display.CocaPlantCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaPlantCost);
			Engine.Display.CocaFarm.innerHTML = Engine.numberWithCommas(Engine.Player.CocaFarm);
			Engine.Display.CocaFarmCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaFarmCost);
			Engine.Display.CocaRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CocaRefinery);
			Engine.Display.CocaRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaRefineryCost);
			Engine.Display.CocaAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.CocaAntiContract);
			
			Engine.Display.Cocaine.innerHTML = Engine.numberWithCommas(Engine.Player.Cocaine);
			Engine.Display.CocaineDealerPrice.innerHTML = Engine.numberWithCommas(Math.ceil(5*(Engine.Player.CocainePrice*0.9)));
			Engine.Display.CocainePS.innerHTML = Engine.numberWithCommas(Engine.Values.CocainePS);
			Engine.Display.CocaineDealer.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineDealer);
			Engine.Display.CocaineDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineDealerCost);
			Engine.Display.CocaineRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineRefinery);
			Engine.Display.CocaineRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineRefineryCost);
			Engine.Display.CocaineAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.CocaineAntiContract);
			
			Engine.Display.Crack.innerHTML = Engine.numberWithCommas(Engine.Player.Crack);
			Engine.Display.CrackDealerPrice.innerHTML = Engine.numberWithCommas(Math.ceil(5*(Engine.Player.CrackPrice*0.9)));
			Engine.Display.CrackPS.innerHTML = Engine.numberWithCommas(Engine.Values.CrackPS);
			Engine.Display.CrackDealer.innerHTML = Engine.numberWithCommas(Engine.Player.CrackDealer);
			Engine.Display.CrackDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.CrackDealerCost);
			
			
			/*
			-----
			HTMLMeth
			----
			*/
			
			
			Engine.Display.Sudafed.innerHTML = Engine.numberWithCommas(Engine.Player.Sudafed);
			Engine.Display.SudafedPS.innerHTML = Engine.numberWithCommas(Engine.Values.SudafedPS);
			Engine.Display.Smurf.innerHTML = Engine.numberWithCommas(Engine.Player.Smurf);
			Engine.Display.SmurfCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmurfCost);
			Engine.Display.SudafedAntiContract.innerHTML = Engine.numberWithCommas(Engine.Player.SudafedAntiContract);
			
			Engine.Display.Meth.innerHTML = Engine.numberWithCommas(Engine.Player.Meth);
			Engine.Display.MethDealerPrice.innerHTML = Engine.numberWithCommas(Math.ceil(5*(Engine.Player.MethPrice*0.9)));
			Engine.Display.MethPS.innerHTML = Engine.numberWithCommas(Engine.Values.MethPS);
			Engine.Display.MethDealer.innerHTML = Engine.numberWithCommas(Engine.Player.MethDealer);
			Engine.Display.MethDealerCost.innerHTML = Engine.numberWithCommas(Engine.Player.MethDealerCost);
			Engine.Display.MethRefinery.innerHTML = Engine.numberWithCommas(Engine.Player.MethRefinery);
			Engine.Display.MethRefineryCost.innerHTML = Engine.numberWithCommas(Engine.Player.MethRefineryCost);
			
			
			/*
			-----
			HTMLGuns
			----
			*/
			
			
			Engine.Display.SmallArm.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArm);
			Engine.Display.SmallArmPS.innerHTML = Engine.numberWithCommas(Engine.Values.SmallArmPS);
			Engine.Display.SmallArmFactory.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArmFactory);
			Engine.Display.SmallArmFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArmFactoryCost);
			
			Engine.Display.HeavyArm.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArm);
			Engine.Display.HeavyArmPS.innerHTML = Engine.numberWithCommas(Engine.Values.HeavyArmPS);
			Engine.Display.HeavyArmFactory.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArmFactory);
			Engine.Display.HeavyArmFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArmFactoryCost);
			
			Engine.Display.SmallArmDealers1.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArmDealers1);
			Engine.Display.SmallArmDealers2.innerHTML = Engine.numberWithCommas(Engine.Player.SmallArmDealers2);
			
			Engine.Display.HeavyArmDealers1.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArmDealers1);
			Engine.Display.HeavyArmDealers2.innerHTML = Engine.numberWithCommas(Engine.Player.HeavyArmDealers2);
			
			
			/*
			-----
			HTMLAmmo
			----
			*/
			
			
			Engine.Display.SaltpeterPS.innerHTML = Engine.numberWithCommas(Engine.Values.SaltpeterPS);
			Engine.Display.SaltpeterMine.innerHTML = Engine.numberWithCommas(Engine.Player.SaltpeterMine);
			Engine.Display.SaltpeterMineCost.innerHTML = Engine.numberWithCommas(Engine.Player.SaltpeterMineCost);
			
			Engine.Display.GunpowderPS.innerHTML = Engine.numberWithCommas(Engine.Values.GunpowderPS);
			Engine.Display.GunpowderFactory.innerHTML = Engine.numberWithCommas(Engine.Player.GunpowderFactory);
			Engine.Display.GunpowderFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.GunpowderFactoryCost);
			
			Engine.Display.SmallCaliber.innerHTML = Engine.numberWithCommas(Engine.Player.SmallCaliber);
			Engine.Display.SmallCaliberPS.innerHTML = Engine.numberWithCommas(Engine.Values.SmallCaliberPS);
			Engine.Display.SmallCaliberFactory.innerHTML = Engine.numberWithCommas(Engine.Player.SmallCaliberFactory);
			Engine.Display.SmallCaliberFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.SmallCaliberFactoryCost);
			
			Engine.Display.HighCaliber.innerHTML = Engine.numberWithCommas(Engine.Player.HighCaliber);
			Engine.Display.HighCaliberPS.innerHTML = Engine.numberWithCommas(Engine.Values.HighCaliberPS);
			Engine.Display.HighCaliberFactory.innerHTML = Engine.numberWithCommas(Engine.Player.HighCaliberFactory);
			Engine.Display.HighCaliberFactoryCost.innerHTML = Engine.numberWithCommas(Engine.Player.HighCaliberFactoryCost);
			
			
			
			/*
			-----
			Generation
			----
			*/
			Engine.Display.DebugMenu.innerHTML = Engine.Player.DebugMenu;
			//Engine.Display.Generations.innerHTML = Engine.Player.Generations;
			//Engine.Display.GenPoints.innerHTML = Engine.Player.GenPoints;
			Engine.Display.GenCost.innerHTML = Engine.Player.GenCost;
			
			
			
			
			timeDifference -= Engine.IdleSpeed;
			Engine.Ticks += Engine.IdleSpeed;
			
			
			Engine.Display.IronContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.IronContractMoney);
			Engine.Display.RefIronContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.RefIronContractMoney);
			Engine.Display.MotorContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.MotorContractMoney);
			Engine.Display.CarContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.CarContractMoney);
			
			Engine.Display.CoalContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.CoalContractMoney);
			Engine.Display.SteelContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.SteelContractMoney);
			Engine.Display.ACContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.ACContractMoney);
			
			Engine.Display.CopperContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.CopperContractMoney);
			Engine.Display.RefCopperContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.RefCopperContractMoney);
			Engine.Display.SpoolContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.SpoolContractMoney);
			Engine.Display.ElecContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.ElecContractMoney);
			
			Engine.Display.GasContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.GasContractMoney);
			Engine.Display.PlasticContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.PlasticContractMoney);
			
			Engine.Display.GlassContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.GlassContractMoney);
			Engine.Display.LightbulbContractMoney.innerHTML = Engine.numberWithCommas(Engine.Player.LightbulbContractMoney);
			
			
			// Value Change
			if (Engine.Player.DebugMenu == "Debug Menu On") {
				Engine.Player.Money = Engine.Player.ForceNaNforDebugReasonsDontQuestionMe
				Engine.Values.MoneyPS = (Engine.Player.IronContract - Engine.Player.IronAntiContract)*Engine.Player.IronContractMoneyForceNaN + (Engine.Player.RefIronContract - Engine.Player.RefIronAntiContract)*Engine.Player.RefIronContractMoney + (Engine.Player.MechPartContract - Engine.Player.MechPartAntiContract)*Engine.Player.MechPartContractMoney + (Engine.Player.MotorContract - Engine.Player.MotorAntiContract)*Engine.Player.MotorContractMoney + (Engine.Player.CarContract - Engine.Player.CarAntiContract)*Engine.Player.CarContractMoney + (Engine.Player.CoalContract - Engine.Player.CoalAntiContract)*Engine.Player.CoalContractMoney + (Engine.Player.SteelContract - Engine.Player.SteelAntiContract)*Engine.Player.SteelContractMoney + (Engine.Player.ConsPartContract - Engine.Player.ConsPartAntiContract)*Engine.Player.ConsPartContractMoney + (Engine.Player.ACContract - Engine.Player.ACAntiContract)*Engine.Player.ACContractMoney + (Engine.Player.CopperContract - Engine.Player.CopperAntiContract)*Engine.Player.CopperContractMoney + (Engine.Player.RefCopperContract - Engine.Player.RefCopperAntiContract)*Engine.Player.RefCopperContractMoney + (Engine.Player.SpoolContract - Engine.Player.SpoolAntiContract)*Engine.Player.SpoolContractMoney + (Engine.Player.ElecContract - Engine.Player.ElecAntiContract)*Engine.Player.ElecContractMoney + (0 - Engine.Player.OilAntiContract)*Engine.Player.OilContractMoney + Engine.Player.GasContract*Engine.Player.GasContractMoney + (Engine.Player.PlasticContract - Engine.Player.PlasticAntiContract)*Engine.Player.PlasticContractMoney + (0 - Engine.Player.SandAntiContract)*Engine.Player.SandContractMoney + (Engine.Player.GlassContract - Engine.Player.GlassAntiContract)*Engine.Player.GlassContractMoney + (Engine.Player.LightbulbContract - Engine.Player.LightbulbAntiContract)*Engine.Player.LightbulbContractMoney + (0 - Engine.Player.SiliconAntiContract)*Engine.Player.SiliconContractMoney + (Engine.Player.AdvElecContract - Engine.Player.AdvElecAntiContract)*Engine.Player.AdvElecContractMoney + Math.round(Engine.Player.MWh*Engine.Player.MWhCost) + Engine.Player.Dealership*Engine.Player.CarDealerMoney + Engine.Player.Plane*Engine.Player.AirportMoney + Engine.Player.Warehouse*3000 + Engine.Player.Skyscraper*42500 + Engine.Player.WeedDealer*45;
			} else {
				Engine.Values.MoneyPS = (Engine.Player.IronContract - Engine.Player.IronAntiContract)*Engine.Player.IronContractMoney + (Engine.Player.RefIronContract - Engine.Player.RefIronAntiContract)*Engine.Player.RefIronContractMoney + (Engine.Player.MechPartContract - Engine.Player.MechPartAntiContract)*Engine.Player.MechPartContractMoney + (Engine.Player.MotorContract - Engine.Player.MotorAntiContract)*Engine.Player.MotorContractMoney + (Engine.Player.CarContract - Engine.Player.CarAntiContract)*Engine.Player.CarContractMoney + 
					//CoalMoneyPS
					(Engine.Player.CoalContract - Engine.Player.CoalAntiContract)*Engine.Player.CoalContractMoney + (Engine.Player.SteelContract - Engine.Player.SteelAntiContract)*Engine.Player.SteelContractMoney + (Engine.Player.ConsPartContract - Engine.Player.ConsPartAntiContract)*Engine.Player.ConsPartContractMoney + (Engine.Player.ACContract - Engine.Player.ACAntiContract)*Engine.Player.ACContractMoney + 
					//CopperMoneyPS
					(Engine.Player.CopperContract - Engine.Player.CopperAntiContract)*Engine.Player.CopperContractMoney + (Engine.Player.RefCopperContract - Engine.Player.RefCopperAntiContract)*Engine.Player.RefCopperContractMoney + (Engine.Player.SpoolContract - Engine.Player.SpoolAntiContract)*Engine.Player.SpoolContractMoney + (Engine.Player.ElecContract - Engine.Player.ElecAntiContract)*Engine.Player.ElecContractMoney + 
					//OilMoneyPS
					(0 - Engine.Player.OilAntiContract)*Engine.Player.OilContractMoney + (Engine.Player.GasContract - Engine.Player.GasAntiContract)*Engine.Player.GasContractMoney + (Engine.Player.PlasticContract - Engine.Player.PlasticAntiContract)*Engine.Player.PlasticContractMoney + 
					//SandMoneyPS
					(0 - Engine.Player.SandAntiContract)*Engine.Player.SandContractMoney + (Engine.Player.GlassContract - Engine.Player.GlassAntiContract)*Engine.Player.GlassContractMoney + (Engine.Player.LightbulbContract - Engine.Player.LightbulbAntiContract)*Engine.Player.LightbulbContractMoney + 
					//RoboticsMoneyPS
					(0 - Engine.Player.SiliconAntiContract)*Engine.Player.SiliconContractMoney + (Engine.Player.AdvElecContract - Engine.Player.AdvElecAntiContract)*Engine.Player.AdvElecContractMoney + 
					//PowerMoneyPS
					Math.round(Engine.Player.MWh*Engine.Player.MWhCost) + 
					//Dealership/Plane MoneyPS
					Engine.Player.Dealership*Engine.Player.CarDealerMoney + Engine.Player.Plane*Engine.Player.AirportMoney + Engine.Player.Warehouse*3000 + Engine.Player.Skyscraper*42500 + 
					//CrimeMoneyPS
					Math.ceil(Engine.Player.WeedDealer*5*(Engine.Player.WeedPrice*0.9)) + (0 - Engine.Player.CocaAntiContract)*1400 + Math.ceil(Engine.Player.CocaineDealer*5*(Engine.Player.CocainePrice*0.9)) + Math.ceil(Engine.Player.CrackDealer*5*(Engine.Player.CrackPrice*0.9)) + (0 - Engine.Player.SudafedAntiContract)*5000 - Engine.Player.MethRefinery*50000 + Math.ceil(Engine.Player.MethDealer*5*(Engine.Player.MethPrice*0.9));
			}
			
			Engine.Display.AntiContracts.innerHTML = Engine.Player.IronAntiContract + Engine.Player.RefIronAntiContract + Engine.Player.MotorAntiContract + Engine.Player.CarAntiContract + Engine.Player.CoalAntiContract + Engine.Player.SteelAntiContract + Engine.Player.MechPartAntiContract + Engine.Player.ACAntiContract + Engine.Player.ConsPartAntiContract + Engine.Player.CopperAntiContract + Engine.Player.RefCopperAntiContract + Engine.Player.SpoolAntiContract + Engine.Player.ElecAntiContract + Engine.Player.OilAntiContract + Engine.Player.GasAntiContract + Engine.Player.PlasticAntiContract + Engine.Player.SandAntiContract + Engine.Player.GlassAntiContract + Engine.Player.LightbulbAntiContract + Engine.Player.SiliconAntiContract + Engine.Player.AdvElecAntiContract + Engine.Player.CocaAntiContract + Engine.Player.CocaineAntiContract + Engine.Player.SudafedAntiContract;
			if (Engine.Player.MWh < 0) {
				Engine.Values.MWhGross = 0
			} else {
				Engine.Values.MWhGross = Engine.Player.MWh
			}
				Engine.Display.GrossMoneyPS.innerHTML = (Engine.Player.IronContract)*Engine.Player.IronContractMoney + (Engine.Player.RefIronContract)*Engine.Player.RefIronContractMoney + (Engine.Player.MechPartContract)*Engine.Player.MechPartContractMoney + (Engine.Player.MotorContract)*Engine.Player.MotorContractMoney + (Engine.Player.CarContract)*Engine.Player.CarContractMoney + 
					//CoalMoneyPS
					(Engine.Player.CoalContract)*Engine.Player.CoalContractMoney + (Engine.Player.SteelContract)*Engine.Player.SteelContractMoney + (Engine.Player.ConsPartContract)*Engine.Player.ConsPartContractMoney + (Engine.Player.ACContract)*Engine.Player.ACContractMoney + 
					//CopperMoneyPS
					(Engine.Player.CopperContract)*Engine.Player.CopperContractMoney + (Engine.Player.RefCopperContract)*Engine.Player.RefCopperContractMoney + (Engine.Player.SpoolContract)*Engine.Player.SpoolContractMoney + (Engine.Player.ElecContract)*Engine.Player.ElecContractMoney + 
					//OilMoneyPS
					Engine.Player.GasContract*Engine.Player.GasContractMoney + (Engine.Player.PlasticContract)*Engine.Player.PlasticContractMoney + 
					//SandMoneyPS
					(Engine.Player.GlassContract)*Engine.Player.GlassContractMoney + (Engine.Player.LightbulbContract)*Engine.Player.LightbulbContractMoney + 
					//RoboticsMoneyPS
					(Engine.Player.AdvElecContract)*Engine.Player.AdvElecContractMoney + 
					//PowerMoneyPS
					Math.round(Engine.Values.MWhGross*Engine.Player.MWhCost) + 
					//Dealership/Plane MoneyPS
					Engine.Player.Dealership*Engine.Player.CarDealerMoney + Engine.Player.Plane*Engine.Player.AirportMoney + Engine.Player.Warehouse*3000 + Engine.Player.Skyscraper*42500 + 
					//CrimeMoneyPS
					Math.ceil(Engine.Player.WeedDealer*5*(Engine.Player.WeedPrice*0.9)) + Math.ceil(Engine.Player.CocaineDealer*5*(Engine.Player.CocainePrice*0.9)) + Math.ceil(Engine.Player.CrackDealer*5*(Engine.Player.CrackPrice*0.9)) - Engine.Player.MethRefinery*50000 + Math.ceil(Engine.Player.MethDealer*5*(Engine.Player.MethPrice*0.9));
			
			Engine.Display.MoneyPS.innerHTML = Engine.numberWithCommas(Engine.Values.MoneyPS);
			
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
			Engine.Values.FavourGain = Math.floor(Engine.Player.Money/1000000);
			Engine.Display.GoldCoinGain.innerHTML = Engine.Values.GoldCoinGain;
			Engine.Display.FavourGain.innerHTML = Engine.Values.FavourGain;
			
			Engine.Display.GoldCoin.innerHTML = Engine.Player.GoldCoin;
			Engine.Display.Favour.innerHTML = Engine.Player.Favour;
			
			
			
			/*
			----------
			HTMLGilded
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
			
			Engine.Display.GildedAirportStaff.innerHTML = Engine.Player.GildedAirportStaff;
			Engine.Display.GildedAirportStaffCost.innerHTML = Engine.Player.GildedAirportStaffCost;
			
			Engine.Display.GildedProgrammer.innerHTML = Engine.Player.GildedProgrammer;
			Engine.Display.GildedProgrammerCost.innerHTML = Engine.Player.GildedProgrammerCost;
			
			Engine.Display.GildedDirector.innerHTML = Engine.Player.GildedDirector;
			Engine.Display.GildedDirectorCost.innerHTML = Engine.Player.GildedDirectorCost;
				
			if (Engine.Player.Money < 0) {
				if (Engine.Player.GoldCoin > 0) {
					Engine.Player.GoldCoin--;
					Engine.Player.Money += 50000;
					Engine.Status("Sold a gold coin to stay in business!");
					Engine.Display.Money.innerHTML = Engine.numberWithCommas(Engine.Player.Money);
				} else {
					window.localStorage.removeItem("savefile");
					var modal = document.getElementById('myModal');
					modal.style.display = "block";
					Engine.AutoSave = 0
				}
			}
			
			
			
			/*
			----------
			HTMLFavour
			----------
			*/
			
			Engine.Display.Hitman.innerHTML = Engine.Player.Hitman;
			Engine.Display.HitmanCost.innerHTML = Engine.Player.HitmanCost;
			
			Engine.Display.DoEBribe.innerHTML = Engine.Player.DoEBribe;
			Engine.Display.DoEBribeCost.innerHTML = Engine.Player.DoEBribeCost;
			
			Engine.Display.ChopShop.innerHTML = Engine.Player.ChopShop;
			Engine.Display.ChopShopCost.innerHTML = Engine.Player.ChopShopCost;
			
			
			//==============Hidden Resources
			//==============
		
		
		
			if (Engine.Player.GoldCoin > 0) {
				document.getElementById("GoldCoinResource").className = "swMain";
			}
			if (Engine.Player.Favour > 0) {
				document.getElementById("FavourResource").className = "swMain";
			}
			
		
		
		
			if (Engine.Player.Iron > 0 || Engine.Player.IronAntiContract > 0) {
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
			
		
			
			if (Engine.Player.Plastic > 0 || Engine.Player.PlasticAntiContract > 0) {
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
			
			
			if (Engine.Player.Silicon > 0) {
				document.getElementById("SiliconResource").className = "swMain";
			}
			
			if (Engine.Player.SiliconAntiContract > 0) {
				document.getElementById("SiliconMark").className = "MarkVisible";
			}
			
			if (Engine.Player.SiliconAntiContract < 1) {
				document.getElementById("SiliconMark").className = "MarkInvisible";
			}
			
			
			if (Engine.Player.AdvElectronic > 0) {
				document.getElementById("AdvElectronicResource").className = "swMain";
			}
			
			if (Engine.Player.AdvElecAntiContract > 0) {
				document.getElementById("AdvElecMark").className = "MarkVisible";
			}
			
			if (Engine.Player.AdvElecAntiContract < 1) {
				document.getElementById("AdvElecMark").className = "MarkInvisible";
			}
			
			
			if (Engine.Player.Code > 0) {
				document.getElementById("CodeResource").className = "swMain";
			}
			
			if (Engine.Player.CodeAntiContract > 0) {
				document.getElementById("CodeMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CodeAntiContract < 1) {
				document.getElementById("CodeMark").className = "MarkInvisible";
			}
			
			
			if (Engine.Player.Software > 0) {
				document.getElementById("SoftwareResource").className = "swMain";
			}
			
			
			
		//ResourceCrime
			
			if (Engine.Player.HighTimer > 0) {
				document.getElementById("HighTimerResource").className = "swMain";
			} else {
				document.getElementById("HighTimerResource").className = "swHide";			
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
			
			if (Engine.Player.Coca > 0) {
				document.getElementById("CocaResource").className = "swMain";
			}
			
			if (Engine.Player.CocaAntiContract > 0) {
				document.getElementById("CocaMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CocaAntiContract < 1) {
				document.getElementById("CocaMark").className = "MarkInvisible";
			}
			
			if (Engine.Player.Cocaine > 0) {
				document.getElementById("CocaineResource").className = "swMain";
			}
			
			if (Engine.Player.CocaineAntiContract > 0) {
				document.getElementById("CocaineMark").className = "MarkVisible";
			}
			
			if (Engine.Player.CocaineAntiContract < 1) {
				document.getElementById("CocaineMark").className = "MarkInvisible";
			}
			
			if (Engine.Player.Crack > 0) {
				document.getElementById("CrackResource").className = "swMain";
			}
			
			
			if (Engine.Player.Sudafed > 0) {
				document.getElementById("SudafedResource").className = "swMain";
			}
			
			if (Engine.Player.SudafedAntiContract > 0) {
				document.getElementById("SudafedMark").className = "MarkVisible";
			}
			
			if (Engine.Player.SudafedAntiContract < 1) {
				document.getElementById("SudafedMark").className = "MarkInvisible";
			}
			
			if (Engine.Player.Meth > 0) {
				document.getElementById("MethResource").className = "swMain";
			}
			
			if (Engine.Player.SmallArm > 0) {
				document.getElementById("SmallArmResource").className = "swMain";
			}
			
			if (Engine.Player.HeavyArm > 0) {
				document.getElementById("HeavyArmResource").className = "swMain";
			}
			
			if (Engine.Player.Saltpeter > 0) {
				document.getElementById("SaltpeterResource").className = "swMain";
			}
			
			if (Engine.Player.Gunpowder > 0) {
				document.getElementById("GunpowderResource").className = "swMain";
			}
			
			if (Engine.Player.SmallCaliber > 0) {
				document.getElementById("SmallCaliberResource").className = "swMain";
			}
			
			if (Engine.Player.HighCaliber > 0) {
				document.getElementById("HighCaliberResource").className = "swMain";
			}
			
			
		

			
			
			
		
			if (Engine.Player.GenCoal > 0) {
				document.getElementById("buyirefinery").className = "swButtonIron";
				document.getElementById("buyrefironcontract").className = "swButtonIron";
				document.getElementById("buyMotorFact").className = "swButtonIron";
				document.getElementById("buyMotorcontract").className = "swButtonIron";
				document.getElementById("buyCarFact").className = "swButtonIron";
				document.getElementById("buyCarcontract").className = "swButtonIron";
				document.getElementById("buyPlaneFact").className = "swButtonIron";
				
				document.getElementById("buysrefinery").className = "swButtonSteel";
				document.getElementById("buysteelcontract").className = "swButtonSteel";
				document.getElementById("buyMechPartFact").className = "swButtonSteel";
				document.getElementById("buyACFact").className = "swButtonSteel";
				document.getElementById("buyACcontract").className = "swButtonSteel";
				document.getElementById("buyConsPartFact").className = "swButtonSteel";
				
				document.getElementById("buyCRefinery").className = "swButtonCopper";
				document.getElementById("buyrefCoppercontract").className = "swButtonCopper";
				document.getElementById("buySpooler").className = "swButtonCopper";
				document.getElementById("buySpoolcontract").className = "swButtonCopper";
				document.getElementById("buyElecFact").className = "swButtonElec";
				document.getElementById("buyEleccontract").className = "swButtonElec";
				document.getElementById("buyAdvElecFact").className = "swButtonElec";
				document.getElementById("buyAdvEleccontract").className = "swButtonElec";
			}
			
			if (Engine.Player.GenOil > 0) {
				document.getElementById("OilTab2").className = "swMain";
			}
		
			if (Engine.Player.GenGlass > 0) {
				document.getElementById("GlassTab2").className = "swMain";
			}
			
			if (Engine.Player.Workshop > 0) {
				document.getElementById("WorkshopTab2").className = "swMain";
				document.getElementById("upgradeironMine").className = "swButtonIron";
				document.getElementById("upgradeCoalMine").className = "swButtonCoal";
				document.getElementById("upgradeCopperMine").className = "swButtonCopper";
				if (Engine.Player.GenCoal > 0) {
					document.getElementById("upgradeirefinery").className = "swButtonIron";
					document.getElementById("UpgradeMotorFact").className = "swButtonIron";
					document.getElementById("UpgradeCarFact").className = "swButtonIron";
				
					document.getElementById("upgradesrefinery").className = "swButtonSteel";
					document.getElementById("UpgradeMechPartFact").className = "swButtonSteel";
					document.getElementById("UpgradeACFact").className = "swButtonSteel";
				
					document.getElementById("upgradecrefinery").className = "swButtonCopper";
					document.getElementById("UpgradeSpooler").className = "swButtonCopper";
					document.getElementById("UpgradeElecFact").className = "swButtonElec";
				}
				
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
			
			if (Engine.Player.ElecFact > 0 || Engine.Player.AdvElecFact > 0) {
				document.getElementById("RoboticsTab2").className = "swMain";
			}
			
			if (Engine.Player.Favour > 0) {
				document.getElementById("FavourTab2").className = "swMain";
			}
			
			if (Engine.Player.GenCrime > 0) {
				document.getElementById("WeedTab2").className = "swMain";
				document.getElementById("CocaineTab2").className = "swMain";
				document.getElementById("MethTab2").className = "swMain";
				
				document.getElementById("IronTab2").className = "swHideWords";
				document.getElementById("CoalTab2").className = "swHideWords";
				document.getElementById("CopperTab2").className = "swHideWords";
				document.getElementById("BuildingTab2").className = "swHideWords";
				document.getElementById("LicenseTab2").className = "swHideWords";
				
				document.getElementById("OilTab2").className = "swHideWords";
				document.getElementById("GlassTab2").className = "swHideWords";
				document.getElementById("WorkshopTab2").className = "swHideWords";
				document.getElementById("RoboticsTab2").className = "swHideWords";
				document.getElementById("ConstructionTab2").className = "swHideWords";
				document.getElementById("AirportTab2").className = "swHideWords";
				document.getElementById("DealershipTab2").className = "swHideWords";
				document.getElementById("PowerTab2").className = "swHideWords";
				
				document.getElementById("IronResource").className = "swHideWords";
				if (Engine.Player.GoldCoin == 0) {
					document.getElementById("RefIronResource").className = "swHideWords";
				}
				document.getElementById("MotorResource").className = "swHideWords";
				document.getElementById("CarResource").className = "swHideWords";
				document.getElementById("PlaneResource").className = "swHideWords";
				
				if (Engine.Player.GoldCoin == 0) {
					document.getElementById("CoalResource").className = "swHideWords";
					document.getElementById("SteelResource").className = "swHideWords";
				}
				document.getElementById("MechPartResource").className = "swHideWords";
				document.getElementById("ACResource").className = "swHideWords";
				document.getElementById("ConsPartResource").className = "swHideWords";
				document.getElementById("BuildTimeResource").className = "swHideWords";
				
				document.getElementById("CopperResource").className = "swHideWords";	
				if (Engine.Player.GoldCoin == 0) {			
					document.getElementById("RefCopperResource").className = "swHideWords";
				}
				document.getElementById("SpoolResource").className = "swHideWords";
				document.getElementById("ElectronicResource").className = "swHideWords";
				
				document.getElementById("OilResource").className = "swHideWords";
				document.getElementById("GasResource").className = "swHideWords";
				document.getElementById("PlasticResource").className = "swHideWords";
				
				document.getElementById("SandResource").className = "swHideWords";
				document.getElementById("GlassResource").className = "swHideWords";
				document.getElementById("LightbulbResource").className = "swHideWords";
				
				document.getElementById("SiliconResource").className = "swHideWords";
				document.getElementById("AdvElectronicResource").className = "swHideWords";
				document.getElementById("CodeResource").className = "swHideWords";
				document.getElementById("SoftwareResource").className = "swHideWords";
				
				document.getElementById("Retire").className = "swHideWords";
				document.getElementById("RetireFavour").className = "swButtonIron";
				
				
				
				
				
			}
			
			if (Engine.Player.GoldCoin > 0) {
				document.getElementById("GildedTab2").className = "swMain";
				if (Engine.Player.GenCrime > 0) {
					document.getElementById("GunTab2").className = "swMain";
					document.getElementById("AmmoTab2").className = "swMain";
				}
			}
			
			
			
			
			if (Engine.TwoSecondCounter > 1) {
				Engine.TwoSecondCounter = 0
			}
			
			if (isNaN(Engine.Player.Money) == true){
				Engine.Player.Money = Engine.Player.CheckMoney;
			} else {
				Engine.Player.CheckMoney = Engine.Player.Money;
			}
		
			
		}
		setTimeout(Engine.IdleTimer, (Engine.IdleSpeed - timeDifference));
	},
	
	Init: function() {
		
		Engine.Clickables.Status = document.getElementById("status");
		Engine.Display.TillAutoSave = document.getElementById("tillautosave");
		
		
		
		
		
		Engine.Clickables.InvertingPage = document.getElementById("InvertingPage");
		Engine.Clickables.InvertingPage.addEventListener("click", function() {
			Engine.InvertingPage();
			if (document.getElementById("BodyColor").className == "HolyGrailWhite") {
				document.getElementById("BodyColor").className = "HolyGrailBlack";
			} else {
				document.getElementById("BodyColor").className = "HolyGrailWhite";
			}
			return false;
		});
		
		Engine.Clickables.Save = document.getElementById("save");
		Engine.Clickables.Save.addEventListener("click", function() {
			Engine.Save();
			return false;
		});
		
		document.getElementById("save").onmouseup = function(event) {
			if (event.which == 2) {
				//Engine.DebugMenu();
				return false;
			}
		};
		
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
		
		document.getElementById("delete").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.Testing();
				return false;
			}
		};
		
		
		//=====================ClickablesIron
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
		
		document.getElementById("buyironcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAIronContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyrefironcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakARefIronContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyMotorcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAMotorContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyCarcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakACarContract();
				return false;
			}
		};
		
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
		
		//===================ClickablesCoal
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
		
		document.getElementById("buyCoalcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakACoalContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buysteelcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakASteelContract();
				return false;
			}
		};
		
		
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
		
		document.getElementById("buyACcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAACContract();
				return false;
			}
		};
		
		Engine.Clickables.UpgradeACFact = document.getElementById("UpgradeACFact");
		Engine.Clickables.UpgradeACFact.addEventListener("click", function() {
			Engine.UpgradeAACFact();
			return false;
		});
		
		//===================ClickablesCopper
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
		
		document.getElementById("buyCoppercontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakACopperContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyrefCoppercontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakARefCopperContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buySpoolcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakASpoolContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyEleccontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAElecContract();
				return false;
			}
		};
		
		
		Engine.Clickables.UpgradeElecFact = document.getElementById("UpgradeElecFact");
		Engine.Clickables.UpgradeElecFact.addEventListener("click", function() {
			Engine.UpgradeAElecFact();
			return false;
		});
		
		//===================ClickablesOils
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
		
		document.getElementById("buyGascontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAGasContract();
				return false;
			}
		};
		
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
		
		document.getElementById("buyPlasticcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAPlasticContract();
				return false;
			}
		};
		
		
		//===================ClickablesSand
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
		
		document.getElementById("buyGlasscontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAGlassContract();
				return false;
			}
		};
		
		//======================ClickablesLightbulb
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
		
		document.getElementById("buyLightbulbcontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakALightbulbContract();
				return false;
			}
		};
		
		Engine.Clickables.UpgradeLightbulbFact = document.getElementById("UpgradeLightbulbFact");
		Engine.Clickables.UpgradeLightbulbFact.addEventListener("click", function() {
			Engine.UpgradeALightbulbFact();
			return false;
		});
		
		//=====================ClickablesWorkshop
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
		
		
		//=====================ClickablesBuildings
		
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
		
		Engine.Clickables.BuyOffice = document.getElementById("buyOffice");
		Engine.Clickables.BuyOffice.addEventListener("click", function() {
			Engine.BuyAOffice();
			return false;
		});
		
		
		//=====================ClickablesPower
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
		
		
		//=====================ClickablesCar
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
		
		
		//=====================ClickablesPlane
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
		
		//=====================ClickablesConstructionClick
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
		
		//=====================ClickablesRobotics
		Engine.Clickables.BuySiRefinery = document.getElementById("buySiRefinery");
		Engine.Clickables.BuySiRefinery.addEventListener("click", function() {
			Engine.BuyASiRefinery();
			return false;
		});
		
		//========================AdvElec
		Engine.Clickables.BuyAdvElecFact = document.getElementById("buyAdvElecFact");
		Engine.Clickables.BuyAdvElecFact.addEventListener("click", function() {
			Engine.BuyAAdvElecFact();
			return false;
		});
		
		Engine.Clickables.BuyAdvElecContract = document.getElementById("buyAdvEleccontract");
		Engine.Clickables.BuyAdvElecContract.addEventListener("click", function() {
			Engine.BuyAAdvElecContract();
			return false;
		});
		
		document.getElementById("buyAdvEleccontract").onmouseup = function(event) {
			if (event.which == 2) {
				Engine.BreakAAdvElecContract();
				return false;
			}
		};
		
		//===========================Software
		Engine.Clickables.BuildSoftware = document.getElementById("buildSoftware");
		Engine.Clickables.BuildSoftware.addEventListener("click", function() {
			Engine.BuildSoftware();
			return false;
		});
		
		Engine.Clickables.ProgramAutoCar = document.getElementById("AutoCar");
		Engine.Clickables.ProgramAutoCar.addEventListener("click", function() {
			Engine.ProgramAutoCar();
			return false;
		});
		
		Engine.Clickables.ProgramAutopilot = document.getElementById("Autopilot");
		Engine.Clickables.ProgramAutopilot.addEventListener("click", function() {
			Engine.ProgramAutopilot();
			return false;
		});
		
		Engine.Clickables.ProgramArmEfficiency = document.getElementById("ArmEfficiency");
		Engine.Clickables.ProgramArmEfficiency.addEventListener("click", function() {
			Engine.ProgramArmEfficiency();
			return false;
		});
		
		Engine.Clickables.ProgramArrayEfficiency = document.getElementById("ArrayEfficiency");
		Engine.Clickables.ProgramArrayEfficiency.addEventListener("click", function() {
			Engine.ProgramArrayEfficiency();
			return false;
		});
		
		//===================ClickablesGilded
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
		
		Engine.Clickables.BuyGildedAirportStaff = document.getElementById("buyGildedAirportStaff");
		Engine.Clickables.BuyGildedAirportStaff.addEventListener("click", function() {
			Engine.BuyAGildedAirportStaff();
			return false;
		});
		
		Engine.Clickables.BuyGildedProgrammer = document.getElementById("buyGildedProgrammer");
		Engine.Clickables.BuyGildedProgrammer.addEventListener("click", function() {
			Engine.BuyAGildedProgrammer();
			return false;
		});
		
		Engine.Clickables.BuyGildedDirector = document.getElementById("buyGildedDirector");
		Engine.Clickables.BuyGildedDirector.addEventListener("click", function() {
			Engine.BuyAGildedDirector();
			return false;
		});
		
		//=====================ClickablesGeneration
		Engine.Clickables.Retire = document.getElementById("Retire");
		Engine.Clickables.Retire.addEventListener("click", function() {
			Engine.Retire();
			return false;
		});
		
		Engine.Clickables.RetireFavour = document.getElementById("RetireFavour");
		Engine.Clickables.RetireFavour.addEventListener("click", function() {
			Engine.Favour();
			return false;
		});
		
		Engine.Clickables.UnlockCoal = document.getElementById("UnlockCoal");
		Engine.Clickables.UnlockCoal.addEventListener("click", function() {
			Engine.UnlockCoal();
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
		
		//==========================ClickablesCrime!
		
		Engine.Clickables.YesCrime = document.getElementById("YesCrime");
		Engine.Clickables.YesCrime.addEventListener("click", function() {
			Engine.Modal.style.display = "none";
			Engine.Player.NoCrime = 1;
			Engine.Player.GenCrime = 1;
			Engine.BuyAWeedplant();
			return false;
		});
		
		Engine.Clickables.NoCrime = document.getElementById("NoCrime");
		Engine.Clickables.NoCrime.addEventListener("click", function() {
			Engine.Modal.style.display = "none";
			Engine.Player.NoCrime = 1;
			return false;
		});
		
		Engine.Clickables.UnlockCrime = document.getElementById("UnlockCrime");
		Engine.Clickables.UnlockCrime.addEventListener("click", function() {
			Engine.UnlockCrime();
			return false;
		});
		
		Engine.Clickables.GetHigh = document.getElementById("GetHigh");
		Engine.Clickables.GetHigh.addEventListener("click", function() {
			Engine.GetHigh();
			return false;
		});
		
		//==========================ClickablesWeed
		
		Engine.Clickables.BuyWeedplant = document.getElementById("buyWeedplant");
		Engine.Clickables.BuyWeedplant.addEventListener("click", function() {
			Engine.BuyAWeedplant();
			return false;
		});
		
		Engine.Clickables.BuyWeedFarm = document.getElementById("buyWeedFarm");
		Engine.Clickables.BuyWeedFarm.addEventListener("click", function() {
			Engine.BuyAWeedFarm();
			return false;
		});
		
		Engine.Clickables.SellWeed = document.getElementById("SellWeed");
		Engine.Clickables.SellWeed.addEventListener("mouseup", function() {
		if (Engine.Player.High == 0) {
			Engine.SellWeed();
			return false;
		}
		});
		Engine.Clickables.SellWeed.addEventListener("click", function() {
		if (Engine.Player.High == 1) {
			Engine.SellWeed();
			return false;
		}
		});
		
			Engine.Clickables.BuyWeedDealer = document.getElementById("buyWeedDealer");
			Engine.Clickables.BuyWeedDealer.addEventListener("click", function() {
				Engine.BuyAWeedDealer();
				return false;
			});
		
		//==========================ClickablesCoca
		
		Engine.Clickables.BuyCocaplant = document.getElementById("buyCocaplant");
		Engine.Clickables.BuyCocaplant.addEventListener("click", function() {
			Engine.BuyACocaplant();
			return false;
		});
		
		Engine.Clickables.BuyCocaFarm = document.getElementById("buyCocaFarm");
		Engine.Clickables.BuyCocaFarm.addEventListener("click", function() {
			Engine.BuyACocaFarm();
			return false;
		});
		
		Engine.Clickables.SellCoca = document.getElementById("SellCoca");
		Engine.Clickables.SellCoca.addEventListener("mouseup", function() {
		if (Engine.Player.High == 0) {
			Engine.SellCoca();
			return false;
		}
		});
		Engine.Clickables.SellCoca.addEventListener("click", function() {
		if (Engine.Player.High == 1) {
			Engine.SellCoca();
			return false;
		}
		});
		
		Engine.Clickables.BuyCocaRefinery = document.getElementById("BuyCocaRefinery");
		Engine.Clickables.BuyCocaRefinery.addEventListener("mouseup", function() {
			Engine.BuyACocaRefinery();
			return false;
		});
		
		Engine.Clickables.SellCocaine = document.getElementById("SellCocaine");
		Engine.Clickables.SellCocaine.addEventListener("mouseup", function() {
		if (Engine.Player.High == 0) {
			Engine.SellCocaine();
			return false;
		}
		});
		Engine.Clickables.SellCocaine.addEventListener("click", function() {
		if (Engine.Player.High == 1) {
			Engine.SellCocaine();
			return false;
		}
		});
		
			Engine.Clickables.BuyCocaineDealer = document.getElementById("buyCocaineDealer");
			Engine.Clickables.BuyCocaineDealer.addEventListener("click", function() {
				Engine.BuyACocaineDealer();
				return false;
			});
		
		Engine.Clickables.BuyCocaineRefinery = document.getElementById("BuyCocaineRefinery");
		Engine.Clickables.BuyCocaineRefinery.addEventListener("mouseup", function() {
			Engine.BuyACocaineRefinery();
			return false;
		});
		
		Engine.Clickables.SellCrack = document.getElementById("SellCrack");
		Engine.Clickables.SellCrack.addEventListener("mouseup", function() {
		if (Engine.Player.High == 0) {
			Engine.SellCrack();
			return false;
		}
		});
		Engine.Clickables.SellCrack.addEventListener("click", function() {
		if (Engine.Player.High == 1) {
			Engine.SellCrack();
			return false;
		}
		});
		
			Engine.Clickables.BuyCrackDealer = document.getElementById("buyCrackDealer");
			Engine.Clickables.BuyCrackDealer.addEventListener("click", function() {
				Engine.BuyACrackDealer();
				return false;
			});
			
		
		//==========================ClickablesMeth
		//==========================ClickablesMeth
		
		Engine.Clickables.BuyMethRefinery = document.getElementById("BuyMethRefinery");
		Engine.Clickables.BuyMethRefinery.addEventListener("mouseup", function() {
			Engine.BuyAMethRefinery();
			return false;
		});
		
		Engine.Clickables.SellMeth = document.getElementById("SellMeth");
		Engine.Clickables.SellMeth.addEventListener("mouseup", function() {
		if (Engine.Player.High == 0) {
			Engine.SellMeth();
			return false;
		}
		});
		Engine.Clickables.SellMeth.addEventListener("click", function() {
		if (Engine.Player.High == 1) {
			Engine.SellMeth();
			return false;
		}
		});
		
			Engine.Clickables.BuyMethDealer = document.getElementById("buyMethDealer");
			Engine.Clickables.BuyMethDealer.addEventListener("click", function() {
				Engine.BuyAMethDealer();
				return false;
			});
		
			Engine.Clickables.BuySmurf = document.getElementById("buySmurf");
			Engine.Clickables.BuySmurf.addEventListener("click", function() {
				Engine.BuyASmurf();
				return false;
			});
			
		
		//==========================ClickablesGuns
		//==========================ClickablesGuns
		
		Engine.Clickables.BuySmallArmFactory = document.getElementById("buySmallArmFactory");
		Engine.Clickables.BuySmallArmFactory.addEventListener("mouseup", function() {
			Engine.BuyASmallArmFactory();
			return false;
		});
		
		Engine.Clickables.BuyHeavyArmFactory = document.getElementById("buyHeavyArmFactory");
		Engine.Clickables.BuyHeavyArmFactory.addEventListener("mouseup", function() {
			Engine.BuyAHeavyArmFactory();
			return false;
		});
			
		
		//==========================ClickablesGuns
		//==========================ClickablesGuns
		
		Engine.Clickables.BuySaltpeterMine = document.getElementById("buySaltpeterMine");
		Engine.Clickables.BuySaltpeterMine.addEventListener("mouseup", function() {
			Engine.BuyASaltpeterMine();
			return false;
		});
		
		Engine.Clickables.BuyGunpowderFactory = document.getElementById("buyGunpowderFactory");
		Engine.Clickables.BuyGunpowderFactory.addEventListener("mouseup", function() {
			Engine.BuyAGunpowderFactory();
			return false;
		});
		
		Engine.Clickables.armDealersSmall = document.getElementById("armDealersSmall");
		Engine.Clickables.armDealersSmall.addEventListener("mouseup", function() {
			Engine.armDealersSmall();
			return false;
		});
		
		Engine.Clickables.BuySmallCaliberFactory = document.getElementById("buySmallCaliberFactory");
		Engine.Clickables.BuySmallCaliberFactory.addEventListener("mouseup", function() {
			Engine.BuyASmallCaliberFactory();
			return false;
		});
		
		Engine.Clickables.BuyHighCaliberFactory = document.getElementById("buyHighCaliberFactory");
		Engine.Clickables.BuyHighCaliberFactory.addEventListener("mouseup", function() {
			Engine.BuyAHighCaliberFactory();
			return false;
		});
		
		Engine.Clickables.armDealersHeavy = document.getElementById("armDealersHeavy");
		Engine.Clickables.armDealersHeavy.addEventListener("mouseup", function() {
			Engine.armDealersHeavy();
			return false;
		});
			
		
		//==========================ClickablesFavour
		//==========================ClickablesFavour
		
		Engine.Clickables.BuyHitman = document.getElementById("BuyHitman");
		Engine.Clickables.BuyHitman.addEventListener("mouseup", function() {
			Engine.BuyAHitman();
			return false;
		});
		
		Engine.Clickables.BuyDoEBribe = document.getElementById("BuyDoEBribe");
		Engine.Clickables.BuyDoEBribe.addEventListener("mouseup", function() {
			Engine.BuyADoEBribe();
			return false;
		});
		
		Engine.Clickables.BuyChopShop = document.getElementById("BuyChopShop");
		Engine.Clickables.BuyChopShop.addEventListener("mouseup", function() {
			Engine.BuyAChopShop();
			return false;
		});
		
		Engine.Clickables.BuyGenGambling = document.getElementById("BuyGenGambling");
		Engine.Clickables.BuyGenGambling.addEventListener("mouseup", function() {
			Engine.BuyAGenGambling();
			return false;
		});
		
		Engine.Display.DebugMenu = document.getElementById("DebugMenu");
		//Engine.Display.ContractShift = document.getElementById("ContractShift");
		
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
		Engine.Display.CarContractCost2 = document.getElementById("CarContractCost2");
		
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
		
		
		//ElementCopper
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
		
		
		//ElementOil
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
		
		
		//ElementSand
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
		
	
		//ElementLightbulbFact
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
		
		
		//ElementBuildables
		
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
		
		
		//ElementPower
		
		Engine.Display.MWh = document.getElementById("MWh");
		Engine.Display.MWhMoney = document.getElementById("MWhMoney");
		
		Engine.Display.MWhCost = document.getElementById("MWhCost");
		
		Engine.Display.PowerLine = document.getElementById("PowerLine");
		Engine.Display.PowerLineCost = document.getElementById("PowerLineCost");
		
		Engine.Display.CoalPlant = document.getElementById("CoalPlant");
		Engine.Display.CoalPlantCost = document.getElementById("CoalPlantCost");
		
		Engine.Display.SolarPlant = document.getElementById("SolarPlant");
		Engine.Display.SolarPlantOutput = document.getElementById("SolarPlantOutput");
		Engine.Display.SolarPlantCost = document.getElementById("SolarPlantCost");
		
		Engine.Display.NuclearPlant = document.getElementById("NuclearPlant");
		Engine.Display.NuclearPlantCost = document.getElementById("NuclearPlantCost");
		
		
		// ElementGenerations
		
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
		
		// ElementBuildings
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
		
		
		//ElementCarTab
		Engine.Display.Dealership = document.getElementById("Dealership");
		Engine.Display.DealershipCost = document.getElementById("DealershipCost");
		
		Engine.Display.Road = document.getElementById("Road");
		Engine.Display.SolarRoad = document.getElementById("SolarRoad");
		Engine.Display.SolarRoadCost = document.getElementById("SolarRoadCost");
		Engine.Display.CarDealerMoney = document.getElementById("CarDealerMoney");
		
		
		//ElementPlaneTab
		Engine.Display.PlaneLimit = document.getElementById("PlaneLimit");
		Engine.Display.AirportMoney = document.getElementById("AirportMoney");
		Engine.Values.AirportStatus = document.getElementById("AirportStatus");
		Engine.Display.Hanger = document.getElementById("Hanger");
		Engine.Display.HangerCost = document.getElementById("HangerCost");
		Engine.Display.Terminal = document.getElementById("Terminal");
		Engine.Display.TerminalCost = document.getElementById("TerminalCost");
		Engine.Display.GiftShop = document.getElementById("GiftShop");
		Engine.Display.GiftShopCost = document.getElementById("GiftShopCost");
		
		
		//ElementConstructionTab
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
		
	
		//ElementSilicon
		Engine.Display.Silicon = document.getElementById("Silicon");
		
		Engine.Display.SiRefinery = document.getElementById("SiRefinery");
		Engine.Display.SiRefineryCost = document.getElementById("SiRefineryCost");
		
		Engine.Display.SiliconAntiContract = document.getElementById("SiliconAntiContract");
		
		Engine.Display.SiliconPS = document.getElementById("SiliconPS");
		
		//AdvElecFact
		Engine.Display.AdvElectronic = document.getElementById("AdvElectronic");
		
		Engine.Display.AdvElecFact = document.getElementById("AdvElecFact");
		Engine.Display.AdvElecFactCost = document.getElementById("AdvElecFactCost");
		
		Engine.Display.AdvElecContract = document.getElementById("AdvElecContract");
		Engine.Display.AdvElecContractCost = document.getElementById("AdvElecContractCost");
		Engine.Display.AdvElecContractMoney = document.getElementById("AdvElecContractMoney");
		
		Engine.Display.AdvElecAntiContract = document.getElementById("AdvElecAntiContract");
		
		Engine.Display.AdvElectronicPS = document.getElementById("AdvElectronicPS");
		
		//ElementCode
		Engine.Display.Code = document.getElementById("Code");
		
		Engine.Display.CodePS = document.getElementById("CodePS");
		
		Engine.Display.Software = document.getElementById("Software");
		Engine.Display.SoftwareCost = document.getElementById("SoftwareCost");
		
		Engine.Display.ProgramAutoCar = document.getElementById("ProgramAutoCar");
		Engine.Display.ProgramAutopilot = document.getElementById("ProgramAutopilot");
		Engine.Display.ProgramArmEfficiency = document.getElementById("ProgramArmEfficiency");
		Engine.Display.ProgramArrayEfficiencyCost = document.getElementById("ProgramArrayEfficiencyCost");
		
		
		//==============ElementWeed
		//==============
		Engine.Display.Weed = document.getElementById("Weed");
		Engine.Display.WeedDealerPrice = document.getElementById("WeedDealerPrice");
		Engine.Display.WeedPS = document.getElementById("WeedPS");
		Engine.Display.WeedPlant = document.getElementById("WeedPlant");
		Engine.Display.WeedPlantCost = document.getElementById("WeedPlantCost");
		Engine.Display.WeedFarm = document.getElementById("WeedFarm");
		Engine.Display.WeedFarmCost = document.getElementById("WeedFarmCost");
		Engine.Display.WeedDealer = document.getElementById("WeedDealer");
		Engine.Display.WeedDealerCost = document.getElementById("WeedDealerCost");
		
		
		//==============ElementCocaine
		//==============
		Engine.Display.HighTimer = document.getElementById("HighTimer");
		
		Engine.Display.Coca = document.getElementById("Coca");
		Engine.Display.CocaPS = document.getElementById("CocaPS");
		Engine.Display.CocaPlant = document.getElementById("CocaPlant");
		Engine.Display.CocaPlantCost = document.getElementById("CocaPlantCost");
		Engine.Display.CocaFarm = document.getElementById("CocaFarm");
		Engine.Display.CocaFarmCost = document.getElementById("CocaFarmCost");
		Engine.Display.CocaRefinery = document.getElementById("CocaRefinery");
		Engine.Display.CocaRefineryCost = document.getElementById("CocaRefineryCost");
		Engine.Display.CocaAntiContract = document.getElementById("CocaAntiContract");
		
		Engine.Display.Cocaine = document.getElementById("Cocaine");
		Engine.Display.CocaineDealerPrice = document.getElementById("CocaineDealerPrice");
		Engine.Display.CocainePS = document.getElementById("CocainePS");
		Engine.Display.CocaineDealer = document.getElementById("CocaineDealer");
		Engine.Display.CocaineDealerCost = document.getElementById("CocaineDealerCost");
		Engine.Display.CocaineRefinery = document.getElementById("CocaineRefinery");
		Engine.Display.CocaineRefineryCost = document.getElementById("CocaineRefineryCost");
		Engine.Display.CocaineAntiContract = document.getElementById("CocaineAntiContract");
		
		Engine.Display.Crack = document.getElementById("Crack");
		Engine.Display.CrackDealerPrice = document.getElementById("CrackDealerPrice");
		Engine.Display.CrackPS = document.getElementById("CrackPS");
		Engine.Display.CrackDealer = document.getElementById("CrackDealer");
		Engine.Display.CrackDealerCost = document.getElementById("CrackDealerCost");
		
		//==============ElementMeth
		//==============
		Engine.Display.Sudafed = document.getElementById("Sudafed");
		Engine.Display.SudafedPS = document.getElementById("SudafedPS");
		Engine.Display.Smurf = document.getElementById("Smurf");
		Engine.Display.SmurfCost = document.getElementById("SmurfCost");
		Engine.Display.SudafedAntiContract = document.getElementById("SudafedAntiContract");
		
		Engine.Display.Meth = document.getElementById("Meth");
		Engine.Display.MethDealerPrice = document.getElementById("MethDealerPrice");
		Engine.Display.MethPS = document.getElementById("MethPS");
		Engine.Display.MethRefinery = document.getElementById("MethRefinery");
		Engine.Display.MethRefineryCost = document.getElementById("MethRefineryCost");
		Engine.Display.MethDealer = document.getElementById("MethDealer");
		Engine.Display.MethDealerCost = document.getElementById("MethDealerCost");
		
		//==============ElementGuns
		//==============
		Engine.Display.SmallArm = document.getElementById("SmallArm");
		Engine.Display.SmallArmPS = document.getElementById("SmallArmPS");
		Engine.Display.SmallArmFactory = document.getElementById("SmallArmFactory");
		Engine.Display.SmallArmFactoryCost = document.getElementById("SmallArmFactoryCost");
		
		Engine.Display.HeavyArm = document.getElementById("HeavyArm");
		Engine.Display.HeavyArmPS = document.getElementById("HeavyArmPS");
		Engine.Display.HeavyArmFactory = document.getElementById("HeavyArmFactory");
		Engine.Display.HeavyArmFactoryCost = document.getElementById("HeavyArmFactoryCost");
		
		Engine.Display.SmallArmDealers1 = document.getElementById("SmallArmDealers1");
		Engine.Display.SmallArmDealers2 = document.getElementById("SmallArmDealers2");
		
		Engine.Display.HeavyArmDealers1 = document.getElementById("HeavyArmDealers1");
		Engine.Display.HeavyArmDealers2 = document.getElementById("HeavyArmDealers2");
		
		
		//==============ElementAmmo
		//==============
		Engine.Display.SaltpeterPS = document.getElementById("SaltpeterPS");
		Engine.Display.SaltpeterMine = document.getElementById("SaltpeterMine");
		Engine.Display.SaltpeterMineCost = document.getElementById("SaltpeterMineCost");
		
		Engine.Display.GunpowderPS = document.getElementById("GunpowderPS");
		Engine.Display.GunpowderFactory = document.getElementById("GunpowderFactory");
		Engine.Display.GunpowderFactoryCost = document.getElementById("GunpowderFactoryCost");
		
		Engine.Display.SmallCaliber = document.getElementById("SmallCaliber");
		Engine.Display.SmallCaliberPS = document.getElementById("SmallCaliberPS");
		Engine.Display.SmallCaliberFactory = document.getElementById("SmallCaliberFactory");
		Engine.Display.SmallCaliberFactoryCost = document.getElementById("SmallCaliberFactoryCost");
		
		Engine.Display.HighCaliber = document.getElementById("HighCaliber");
		Engine.Display.HighCaliberPS = document.getElementById("HighCaliberPS");
		Engine.Display.HighCaliberFactory = document.getElementById("HighCaliberFactory");
		Engine.Display.HighCaliberFactoryCost = document.getElementById("HighCaliberFactoryCost");
		
		
		//==============ElementContract
		//==============
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
		
		Engine.Display.FavourGain = document.getElementById("FavourGain");
		Engine.Display.Favour = document.getElementById("Favour");
		
		
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
		
		Engine.Display.GildedAirportStaff = document.getElementById("GildedAirportStaff");
		Engine.Display.GildedAirportStaffCost = document.getElementById("GildedAirportStaffCost");
		
		Engine.Display.GildedProgrammer = document.getElementById("GildedProgrammer");
		Engine.Display.GildedProgrammerCost = document.getElementById("GildedProgrammerCost");
		
		Engine.Display.GildedDirector = document.getElementById("GildedDirector");
		Engine.Display.GildedDirectorCost = document.getElementById("GildedDirectorCost");
		
		
		
		
		Engine.Display.Hitman = document.getElementById("Hitman");
		Engine.Display.HitmanCost = document.getElementById("HitmanCost");
		
		Engine.Display.DoEBribe = document.getElementById("DoEBribe");
		Engine.Display.DoEBribeCost = document.getElementById("DoEBribeCost");
		
		Engine.Display.ChopShop = document.getElementById("ChopShop");
		Engine.Display.ChopShopCost = document.getElementById("ChopShopCost");
		
		Engine.Display.GenGambling = document.getElementById("GenGambling");
		
		
		
		
		
		
		
		Engine.Display.HourHolder = document.getElementById("HourHolder");
		Engine.Display.MinuteHolder = document.getElementById("MinuteHolder");
		Engine.Display.SecondHolder = document.getElementById("SecondHolder");

		
		
		
		
		Engine.Display.AntiContracts = document.getElementById("AntiContracts");
		Engine.Display.GrossMoneyPS = document.getElementById("GrossMoneyPS");
		
		
		
		Engine.IdleTimer();
		
		// To autoload you could do a savefile check here like so...
		if (window.localStorage.getItem("VMsavefile")) {
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

function openFavour(evt, cityName3) {
    // Declare all variables
    var i, tabcontent3, tablinks3;

    // Get all elements with class="tabcontent" and hide them
    tabcontent3 = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent3.length; i++) {
        tabcontent3[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks3 = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks3.length; i++) {
        tablinks3[i].className = tablinks3[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName3).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function() {
	Engine.Init();
};
