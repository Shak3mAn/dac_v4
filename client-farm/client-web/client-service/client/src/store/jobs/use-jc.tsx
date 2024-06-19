import { create } from "zustand";
import { JobCardDetailsType, JCServiceDetail, JCTechnician, GeneralServiceItem } from "@/lib/types/types"
import { set } from "date-fns";

{/* Job Card Service Item */ }
interface JobCardServiceDetail {
    serviceItem: JCServiceDetail | null;
    services: JCServiceDetail[];
    tempServices: JCServiceDetail | null;
    selectedService: GeneralServiceItem | null;
    onAddServiceItem: (newService: JCServiceDetail) => void;
    onAddTempServiceItem: (newTempService: JCServiceDetail) => void;
    onAddJobCardServiceItem: (newJobCardService: GeneralServiceItem) => void;
    onUpdateServiceItem: (serviceId: string, updateService: JCServiceDetail) => void;
    onDeleteServiceItem: (serviceId: string) => void;
    onDeleteTempServiceItem: () => void;
}

{/* Job Card */ }
interface JobCardItem {
    jobCardItem: JobCardDetailsType | null;
    jobCards: JobCardDetailsType[];
    preJobCardItem: JobCardDetailsType | null;
    onAddJobCardItem: (newJobCard: JobCardDetailsType) => void;
    onAddPreJobCardItem: (newPreJobCard: JobCardDetailsType) => void;
    onUpdateJobCardItem: (jobCardId: string, updateJobCard: JobCardDetailsType) => void;
    onUpdatePreJobCardItem:  (updatePreJobCard: JobCardDetailsType) => void;
    onDeleteJobCardItem: (jobCardId: string) => void;
    onDeleteAllJobCards: () => void;
    onDeletePreJobCardItem: () => void;
}

interface SingleJobCardItem {
    jobCardItem: JobCardDetailsType | null;
    addJobCardItem: (newJobCard: JobCardDetailsType) => void;
    updateJobCardItem: (updatedJobCard: JobCardDetailsType) => void;
    deleteJobCardItem: () => void;
}


{/* Task */ }
type Task = {
    id: number;
    title: string;
    completed: boolean;
    tab: string;
    dueDate: Date | undefined;
};

interface TaskItem {
    taskItem: Task | null;
    tasks: Task[];
    onAddTaskItem: (newTask: Task) => void;
    onUpdateTaskItem: (taskId: number, updatedTask: Task) => void;
    onDeleteTaskItem: (taskId: number) => void;
}

{/* Comment */ }
type Comment = {
    id: number;
    name: string;
    text: string;
    tab: string;
    date: Date | undefined;
};

interface CommentItem {
    commentItem: Comment | null;
    comments: Comment[];
    onAddComment: (newComment: Comment) => void;
}

{/* Note  */ }
type Note = {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: Date | undefined;
}

interface NoteItem {
    noteItem: Note | null;
    notes: Note[];
    onAddNoteItem: (newNote: Note) => void;
    onUpdateNoteItem: (noteId: number, updatedNote: Note) => void;
}

{/* Job Card Services */ }
export const useJobCardServices = create<JobCardServiceDetail>((set) => ({
    serviceItem: null,
    services: [],
    tempServices: null,
    selectedService: null,
    onAddServiceItem: (newService) => set(
        (state) => ({
            services: [...state.services, newService]
        })
    ),
    onAddTempServiceItem: (newTempService) => set(
        { tempServices: newTempService }),
    
        onAddJobCardServiceItem: (newJobCardService) => set({
            selectedService: newJobCardService
        }),
    onUpdateServiceItem: (serviceId, updateService) => set(
        (state) => ({
            services: state.services.map(
                (service) => (
                    service.id === serviceId ? updateService : service
                )
            ),
        })
    ),
    onDeleteServiceItem: (serviceId) => set(
        (state) => ({
            services: state.services.filter(
                (service) => service.id !== serviceId
            ),
        })
    ),
    onDeleteTempServiceItem: () => set({ tempServices: null })
}));

{/* Single Job Card */ }
export const useSingleJobCard = create<SingleJobCardItem>((set) => ({
    jobCardItem: null,
    addJobCardItem: (newJobCard) => set({ jobCardItem: newJobCard }),
    updateJobCardItem: (updatedJobCard) => set({ jobCardItem: updatedJobCard }),
    deleteJobCardItem: () => set({ jobCardItem: null }),
}));

{/* Job Card(s) */ }
export const useJobCard = create<JobCardItem>((set) => ({
    jobCardItem: null,
    jobCards: [],
    preJobCardItem: null,
    onAddJobCardItem: (newjobCard) => set(
        (state) => ({
            jobCards: [...state.jobCards, newjobCard]
        })
    ),
    onAddPreJobCardItem: (newPreJobCard) => set(
        {preJobCardItem: newPreJobCard },
    ),
    onUpdateJobCardItem: (jobCardId, updatejobCard) => set(
        (state) => ({
            jobCards: state.jobCards.map(
                (jobCard) => (
                    jobCard.jobCardID === jobCardId ? updatejobCard : jobCard
                )
            ),
        })
    ),
    onUpdatePreJobCardItem: (updatePreJobCard) => set(
        { preJobCardItem: updatePreJobCard }
    ),
    onDeleteJobCardItem: (jobCardId) => set(
        (state) => ({
            jobCards: state.jobCards.filter(
                (jobCard) => jobCard.jobCardID !== jobCardId
            ),
        })
    ),
    onDeleteAllJobCards: () => set({ jobCards: [] }),
    onDeletePreJobCardItem: () => set({
        preJobCardItem: null
    })
}));

export const useTodoList = create<TaskItem>((set) => ({
    taskItem: null,
    tasks: [],
    onAddTaskItem: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    onUpdateTaskItem: (taskId, updatedTask) => set((state) => ({
        tasks: state.tasks.map((task) => (task.id === taskId ? updatedTask : task)),
    })),
    onDeleteTaskItem: (taskId) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export const useClientShopComments = create<CommentItem>((set) => ({
    commentItem: null,
    comments: [],
    onAddComment: (newComment) => set((state) => ({
        comments: [...state.comments, newComment]
    }))
}))

export const useShopNotes = create<NoteItem>((set) => ({
    noteItem: null,
    notes: [],
    onAddNoteItem: (newNote) => set((state) => ({ notes: [...state.notes, newNote] })),
    onUpdateNoteItem: (noteId, updatedNote) => set((state) => ({
        notes: state.notes.map((note) => (note.id === noteId ? updatedNote : note)),
    }))
}))

