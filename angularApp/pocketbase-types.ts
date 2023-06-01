/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Classes = "Classes",
	Students = "Students",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ClassesRecord = {
	id?: string
	name?: string
	students?: RecordIdString
	expand?: any
}

export type StudentsRecord = {
	name?: string
	surname?: string
	birthDate?: IsoDateString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ClassesResponse<Texpand = unknown> = Required<ClassesRecord> & BaseSystemFields<Texpand>
export type StudentsResponse = Required<StudentsRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Classes: ClassesRecord
	Students: StudentsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Classes: ClassesResponse
	Students: StudentsResponse
	users: UsersResponse
}