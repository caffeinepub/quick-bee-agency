import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  selectedServices: string[];
  budgetRange: string;
  projectDetails: string;
}

export function useContactForm() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Connection not ready. Please wait a moment and try again.');
      }
      await actor.submitContactForm(
        data.fullName,
        data.businessName,
        data.phone,
        data.email,
        data.city,
        data.selectedServices,
        data.budgetRange,
        data.projectDetails
      );
      return data; // Return the data for use in onSuccess
    },
    onSuccess: () => {
      // Invalidate any queries that depend on contact submissions
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });

  const isActorReady = !!actor && !isFetching;

  return {
    submitForm: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    isActorReady,
  };
}
