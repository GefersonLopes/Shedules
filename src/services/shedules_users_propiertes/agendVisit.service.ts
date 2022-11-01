import AppDataSource from "../../data-source";
import { Property } from "../../entities/propertiesEntity";
import { Schedules } from "../../entities/schedulesEntity";
import { User } from "../../entities/userEntity";
import { AppError } from "../../Errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

export const schedulingVisit_Service = async ({date, hour, propertyId, userId}: IScheduleRequest)/* : Promise<IScheduleRequest> */ => {
    const createAgendaRepository = AppDataSource.getRepository(Schedules);
    const userRepository = AppDataSource.getRepository(User);
    const propertyRepository = AppDataSource.getRepository(Property);
    const schedule = await createAgendaRepository.find();
    const verifySchedule = schedule.find(s =>s.date === date && s.hour === hour && s.property.id === propertyId)   
    
    const hourValid = Number(hour.split(":")[0])
    const minuteValid = Number(hour.split(":")[1])
    if(hourValid < 8) throw new AppError(400,"Invalid Hour");
    if(hourValid > 18) throw new AppError(400,"Invalid Hour");
    if(hourValid === 18 && minuteValid !== 0) throw new AppError(400,"Invalid Hour");
    if(new Date(date).toDateString().split(" ")[0] === "Sat" || new Date(date).toDateString().split(" ")[0] === "Sun") throw new AppError(400,"Invalid Hour");

    const verifyUser = await userRepository.findOne({
        where: {
            id: userId,
        },
    });
    const verifyProperty = await propertyRepository.findOne({
        where: {
            id: propertyId,
        },
    });
    if(verifySchedule) throw new AppError(400, "Property already exists");
    if(!verifyUser || !verifyProperty) throw new AppError(404, "Data not found");
    const agenda = new Schedules()
    agenda.date = date;
    agenda.hour = hour;
    agenda.property = verifyProperty;
    agenda.user = verifyUser;
    
    createAgendaRepository.create(agenda);
    await createAgendaRepository.save(agenda);
    return "created";
};