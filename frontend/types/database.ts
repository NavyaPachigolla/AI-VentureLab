export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          user_id: string | null;
          project_name: string;
          project_type: string;
          industry: string | null;
          short_description: string;
          problem_statement: string;
          solution_idea: string;
          current_alternative: string | null;
          primary_target_users: string;
          user_types: string[];
          target_geography: string | null;
          research_goals: string[];
          project_stage: string;
          known_competitors: string | null;
          technologies_considered: string | null;
          additional_notes: string | null;
          status: "Draft" | "Analyzing" | "Completed";
          validation_score: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          project_name: string;
          project_type: string;
          industry?: string | null;
          short_description: string;
          problem_statement: string;
          solution_idea: string;
          current_alternative?: string | null;
          primary_target_users: string;
          user_types?: string[];
          target_geography?: string | null;
          research_goals?: string[];
          project_stage: string;
          known_competitors?: string | null;
          technologies_considered?: string | null;
          additional_notes?: string | null;
          status?: "Draft" | "Analyzing" | "Completed";
          validation_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          project_name?: string;
          project_type?: string;
          industry?: string | null;
          short_description?: string;
          problem_statement?: string;
          solution_idea?: string;
          current_alternative?: string | null;
          primary_target_users?: string;
          user_types?: string[];
          target_geography?: string | null;
          research_goals?: string[];
          project_stage?: string;
          known_competitors?: string | null;
          technologies_considered?: string | null;
          additional_notes?: string | null;
          status?: "Draft" | "Analyzing" | "Completed";
          validation_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type ProjectRecord = Database["public"]["Tables"]["projects"]["Row"];

export type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];
